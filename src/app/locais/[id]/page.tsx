import Image from "next/image";
import Link from "next/link";

type Landmark = {
  id: string,
  latitude: number,
  longitude: number,
  name: string,
  images_url: Array<string>,
  history: string
}

type LandmarkPage = {
  params: { id: string }
}

async function getData(id: string): Promise<Landmark> {
  const res = await fetch(`http://localhost:3000/api/landmark/${id}`, {
    cache: 'reload',
  });

  return res.json();
}

export async function generateStaticParams() {
  const landmarks: Array<Landmark> = await fetch('http://localhost:3000/api/landmark').then((res) => res.json());
 
  return landmarks.map((landmark) => ({
    id: landmark.id,
  }));
}

export default async function landmarkPage({ params }: LandmarkPage) {
  const { id } = params 
  const landmark = await getData(id);

  console.log(landmark)

  return (
    <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8 h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <Link href="/locais" className="hover:bg-orange-300 duration-200 group flex gap-2 mb-3 w-40 items-center rounded-md bg-orange-400 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
          <svg width="20" height="20" fill="currentColor" className="rotate-180" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
          </svg>
          
          Voltar
        </Link>

        <div className="max-w-4xl mx-auto flex lg:flex-row flex-col grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2  bg-slate-50 p-10 rounded-md border border-orange-100 transition ease-in-out delay-150 focus:transition-all">
          <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0 lg:w-1/2">
            <Image src={landmark.images_url[0]} width="500" height="500" alt="" className="transition ease-in-out delay-150 translate-x-0 border-2 border-gray-300 w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" />
            
            {landmark.images_url[1] && (
              <Image src={landmark.images_url[1]} width="500" height="500" alt="" className="border-2 border-gray-300 hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
            )}

            {landmark.images_url[2] && (
              <Image src={landmark.images_url[2]} width="500" height="500" alt="" className="border-2 border-gray-300 hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
            )}
          </div>

          <div className="lg:w-1/2">
            <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t text-bold sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
              <h1 className="mt-1 font-bold text-slate-900 md:text-2xl">{landmark.name}</h1>
            </div>

            <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400 text-ellipsis overflow-hidden max-h-60 ">
              {landmark.history}
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
