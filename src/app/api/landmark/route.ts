import { NextResponse } from 'next/server'
import { randomUUID } from 'node:crypto'

import { collection, doc, getDocs, setDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes } from 'firebase/storage'

import { db, storage } from '@/services/firebase'

import { Blob } from 'node:buffer';
import { api } from '@/services/api'

export async function GET(request: Request) {
  try {
    const querySnapshot = await getDocs(collection(db, "landmarks"))
    const landmarks: any = []

    querySnapshot.forEach(doc => {
      landmarks.push({ id: doc.id, ...doc.data() })
      // console.log(`${doc.id} => ${doc.data()}`)
    })
    return NextResponse.json(landmarks)
  } catch (err) {
    console.log(err)
    return NextResponse.json({ error: 'Error' })
  }
}

export async function POST(request: Request) {
  const requestBuffer = request.clone()
  const formData = await request.formData()

  const name = formData.get('name')
  const history = formData.get('history')
  const latitude = formData.get('latitude')
  const longitude = formData.get('longitude')

  const formFiles: any = formData.getAll('file')

  const acceptedTypes = [
    'image/jpeg',
    'image/jpg',
    'image/png',
    'image/webp',
  ]

  console.log({
    name,
    history,
    latitude,
    longitude,
    formFiles
  })

  const images_url: any = []
  for (const formFile of formFiles) {
    console.log(formFile)
    if (acceptedTypes.includes(formFile.type)) {
      if (formFile.size <= 500000) {
        console.log('Imagem OK!')

        // const storage = getStorage()
        const storageRef = ref(storage, `${randomUUID()}.${formFile.type.split('/')[1]}`)

        const metadata = {
          contentType: formFile.type,
        };

        // const filePath = 'temp.jpeg';
        // const newFile = Buffer.from(file)
        // console.log(newFile)

        // Get file from formData
        const file = formFile

        if (file instanceof Blob) {
          // Convert file to stream
          const stream: any = file.stream();

          // Convert stream to buffer
          const chunks = [];
          for await (const chunk of stream) {
            chunks.push(chunk);
          }
          const buffer = Buffer.concat(chunks);
        
          const snapshot = await uploadBytes(storageRef, buffer, metadata)

          console.log('Uploaded a blob or file!')
          console.log(snapshot.ref.fullPath)
          console.log(snapshot.metadata.updated)

          const { data } = await api.get(`https://firebasestorage.googleapis.com/v0/b/patrimoville.appspot.com/o/${snapshot.ref.fullPath}`)
          const { downloadTokens } = data

          images_url.push(`https://firebasestorage.googleapis.com/v0/b/patrimoville.appspot.com/o/${snapshot.ref.fullPath}?alt=media&token=${downloadTokens}`)
        }

      } else {
        console.log('Imagem muito grande (limite: 500kb)!')
      }
    } else {
      console.log(`Formato '${formFile.type}' invalido! (aceitamos apenas: ${acceptedTypes})`)
    }
  }

  console.log({
    name,
    history,
    latitude,
    longitude,
    images_url
  })
  await setDoc(doc(db, "landmarks", randomUUID()), {
    name,
    history,
    latitude: Number(latitude),
    longitude: Number(longitude),
    images_url
  });

  return NextResponse.json({ success: true, name: 'name' })
}