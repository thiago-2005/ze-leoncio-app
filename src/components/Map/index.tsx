"use client"
import Image from 'next/image'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet, { LeafletMouseEvent } from 'leaflet'

import Link from 'next/link'

import './style.css'

const mapIcon = Leaflet.icon({
  iconUrl: 'mark.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
})

type MapProps = {
  landmarks: Array<{
    id: string,
    latitude: number,
    longitude: number,
    name: string,
    images_url: Array<string>
  }>
}

export default function Map ({ landmarks }: MapProps) {
  "use client"
  const handleMapClick: any = (event: LeafletMouseEvent) => {
    console.log(event)
    const {
      latlng: {
        lat: latitude,
        lng: longitude
      }
    } = event

    const location = {
      latitude,
      longitude
    }

    console.log(location)
  }

  return (
    <MapContainer
        center={[-26.3055339,-48.850644]}
        zoom={30}
        style={{ width: '100%', height: '100%', zIndex: 1 }}
        tapTolerance={handleMapClick}
      >
        <TileLayer  url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png" />
        {landmarks.map(landmark => {
          console.log(landmark)
          return (
            <Marker
              icon={mapIcon}
              position={[landmark.latitude, landmark.longitude]}
              key={landmark.id}
            >
              <Popup closeButton={false} minWidth={240} maxWidth={240} className='mapPopup'>
                <Link href={`/locais/${landmark.id}`} className='bg-orange-200 duration-200  hover:bg-orange-400 text-white text-sm leading-6 font-medium w-full self-center flex justify-between'>
                <div className="max-w-4xl mx-auto grid grid-cols-1 w-full">
                  <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse bg-gradient-to-t from-black/100 via-black/50">
                    <h1 className="mt-1 text-lg font-semibold text-white dark:sm:text-white">{landmark.name}</h1>
                  </div>
                  <div className="grid gap-4 col-start-1 col-end-3 row-start-1">
                    <Image src={landmark.images_url[0]} alt="" width={100} height={100} className="w-full h-40 object-cover lg:col-span-full" />
                  </div>
                  <div className="col-start-1 px-3 py-2 text-center row-start-3 self-center w-full flex">
                    Abrir página
                  </div>
                </div>
                </Link>
              </Popup>
            </Marker>
          )
        })}
    </MapContainer>
  )
}