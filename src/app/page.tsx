import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-row justify-center items-center overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 py-6 sm:py-12 lg:gap-72">
      <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <Image
        src="/image.svg"
        width={500}
        height={500}
        className="lg:h-80 lg:w-auto h-0 w-0"
        alt=""
      />

      <div className="">
        <div className="relative animate-spin-slow bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="mx-auto max-w-md text-black">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                width={50}
                height={50}
                className="h-12"
                alt=""
              />
              <h1 className="font-semibold text-4xl text-cyan-700">
                Patrimoville
              </h1>
            </div>

            <div className="divide-y divide-gray-300/50">
              <div className="space-y-6 py-8 text-base leading-7 text-gray-600">
                <p>Conheça mais sobre os edificios hisóricos de Joinville</p>
              </div>

              {/* <Image
                src="/qrcodeAndroid.png"
                className="mx-auto"
                width={300}
                height={300}
                alt="code"
              /> */}

              <div className="pt-8 text-base font-semibold leading-7">
                {/* <p className="text-gray-900">
                  Escaneie o QR Code para baixar o APP Android
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <Link href="/locais">
          <p className="relative animate-spin-slow bg-white px-6 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 mt-5 pt-8 text-base font-semibold leading-7 text-sky-500 hover:text-white hover:bg-sky-500 hover:border-2 border-white duration-200 cursor-pointer">
            Quero conhecer as construções históricas &rarr;
          </p>
        </Link>
      </div>
    </div>
  );
}
