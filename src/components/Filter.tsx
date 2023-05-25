'use client'

export function Filer () {
  return (
    <form className="flex gap-2 text-lg justify-between translate-y-2 -mb-10 bg-gradient-to-r from-orange-300 to-orange-400 p-3 rounded-lg">
      <input placeholder="Procurar por nome..." className="border-2 text-md border-white p-2 w-full rounded-md text-gray-800" />
      <button className="border-2 text-md border-white p-2 rounded-lg hover:bg-white hover:text-orange-400 duration-200">Procurar</button>
    </form>
  )
}