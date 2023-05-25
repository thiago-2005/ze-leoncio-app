"use client";

// import React, { useState, FormEvent, ChangeEvent } from "react";
// import { MapContainer as Map, Marker, TileLayer } from "react-leaflet";
// import Image from "next/image";
// import { api } from "@/services/api";
// import Leaflet from "leaflet";
import Link from "next/link";
// import { useRouter } from "next/navigation";

// const mapIcon = Leaflet.icon({
//   iconUrl: "mark.svg",
//   iconSize: [58, 68],
//   iconAnchor: [29, 68],
//   popupAnchor: [0, -60],
// });

function Create() {
  // const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  // const [name, setName] = useState("");
  // const [about, setAbout] = useState("");
  // const [images, setImages] = useState<File[]>([]);
  // const [previewImages, setPreviewImages] = useState<string[]>([]);

  // const router = useRouter();

  // function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
  //   if (!event.target.files) {
  //     return;
  //   }

  //   console.log(event.target.files);

  //   const selectedImages = Array.from(event.target.files);

  //   setImages((image) => [...image, selectedImages[0]]);

  //   const selectedImagesPreview = selectedImages.map((image) => {
  //     return URL.createObjectURL(image);
  //   });

  //   setPreviewImages((image) => [...image, selectedImagesPreview[0]]);
  // }

  // function handleRemoveImage(index: number) {
  //   const newImages = [...images];
  //   newImages.splice(index, 1);
  //   setImages(newImages);

  //   const selectedImagesPreview = newImages.map((image) => {
  //     return URL.createObjectURL(image);
  //   });

  //   setPreviewImages(selectedImagesPreview);
  // }

  // async function handleSubmit(e: FormEvent) {
  //   e.preventDefault();
  //   const { latitude, longitude } = position;

  //   const data = new FormData();

  //   data.append("name", name);
  //   data.append("history", about);
  //   data.append("longitude", String(longitude));
  //   data.append("latitude", String(latitude));

  //   images.forEach((image) => {
  //     data.append("file", image);
  //   });

  //   console.log(data.getAll("longitude"));
  //   console.log(data.getAll("latitude"));

  //   await api.post("/api/landmark", data);

  //   router.push("/locais");
  // }

  // const handle: any = (map: any) => {
  //   console.log(map);
  //   map.target.on("click", function (e: any) {
  //     // const { lat, lng } = e.latlng;
  //     // L.marker([lat, lng], { icon }).addTo(map.target);
  //     const {
  //       latlng: { lat: latitude },
  //       latlng: { lng: longitude },
  //     } = e;

  //     setPosition({
  //       latitude: latitude,
  //       longitude: longitude,
  //     });
  //   });
  // };

  return (
    <div id="page-create-landmark">
      <main>
        {/*onSubmit={handleSubmit} */}
        <form className="create-landmark-form">
          <Link
            href="/locais"
            className=" hover:bg-orange-300 duration-200 group flex gap-2 mb-3 w-40 items-center rounded-md bg-orange-400 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
            Voltar
          </Link>
          <fieldset>
            <legend>Página desativada</legend>

            {/* <legend>Adicionar ponto</legend>

            <Map
              center={[-26.3055339, -48.850644]}
              style={{ width: "100%", height: 280 }}
              zoom={15}
              whenReady={handle}
              // onClick={handleMapClick}
            >
              <TileLayer
                url={`https://a.tile.openstreetmap.org/{z}/{x}/{y}.png`}
              />
              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                />
              )}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="about">
                Sobre <span>Máximo de 300 caracteres</span>
              </label>
              <textarea
                id="about"
                maxLength={300}
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map((image, index) => {
                  return (
                    <div style={{ position: "relative" }} key={image}>
                      <div
                        className="removeImageButton"
                        onClick={() => handleRemoveImage(index)}
                      >
                        X
                      </div>
                      <Image width="100" height="100" src={image} alt={name} />
                    </div>
                  );
                })}

                <label htmlFor="image[]" className="new-image">
                  <svg
                    width={30}
                    height={30}
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
                  </svg>
                </label>
              </div>

              <input
                multiple
                onChange={handleSelectImages}
                type="file"
                id="image[]"
              />
            </div>*/}
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

export default Create;
