import { NextResponse } from 'next/server'
import { getDoc, doc } from 'firebase/firestore'

import { db } from '@/services/firebase'

export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    console.log(params.id)

    const landmarkRef = doc(db, 'landmarks', params.id)
    const landmark = (await getDoc(landmarkRef)).data()

    return NextResponse.json(landmark)
  } catch (err) {
    console.log(err)
    return NextResponse.json({ error: 'Error' })
  }
}