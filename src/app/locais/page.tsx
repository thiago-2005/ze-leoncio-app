import Map from "@/components/Map";
import { Filer } from "@/components/Filter";
import { Login } from "@/components/Login";
import { cookies } from "next/headers";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://380482-3000.csb.app/api/landmark", {
    cache: "no-cache",
  });

  return res.json();
}

export default async function Locais() {
  const data = await getData();
  const cookieStore = cookies();
  const cookieUser = cookieStore.get("user");

  const user = cookieUser && JSON.parse(cookieUser.value);

  console.log(user);

  return (
    <main className="h-screen flex flex-col justify-center">
      {user ? (
        <div className="flex gap-2 fixed bottom-3 sm:bottom-auto sm:top-3 right-1 z-50">
          <Link
            href="/adicionar"
            className="flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
          >
            Adicionar ponto
          </Link>
          <div className="flex gap-2 border-2  p-2 bg-white rounded-md text-xl font-bold z-50 bg-gradient-to-r text-orange-400 px-3 py-2">
            <Image
              src={user.photoURL}
              width={50}
              height={50}
              alt=""
              className="rounded-full"
            />

            <div>
              <p className="text-lg text-black">{user.displayName}</p>
              <p className="text-sm text-gray-700">{user.email}</p>
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
      <div className="fixed top-1 sm:top-3 sm:right-auto sm:left-1/2 left-1 right-1 sm:-translate-x-1/2 w-95% sm:w-auto rounded-md text-xl font-bold z-50 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-6">
        Clique nos icones para ver mais informaçõse sobre os locais
        {/* <Filer /> */}
      </div>
      <Map landmarks={data} />
    </main>
  );
}
