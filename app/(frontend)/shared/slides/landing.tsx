import { dm_sans } from "@constants/fonts"

export default function Landing() {

  return (
    <div className="pt-80 px-10">
      <p className="text-gray-200 mb-5 hover:underline text-center">HERRAMIENTA PSICOLOGICA</p>
      <h1 className={`text-white text-4xl ${dm_sans.className} text-center mb-5 font-semibold hover:underline`}>Terapia Cognitiva Conductual</h1>
      <p className="text-gray-400 hover:underline text-center font-semibold">PG. GILBERTO WU</p>
    </div>
  )
}

