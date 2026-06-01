import { dm_sans } from "@/fonts"

export default function Landing() {

  return (
    <div className="pt-100 px-10">
      <p className="text-gray-400 hover:underline">SELF HELP TOOL</p>
      <h1 className={`text-white text-4xl ${dm_sans.className} font-semibold mb-10 hover:underline`}>Terapia Cognitiva Conductual</h1>

      <p className={`text-gray-300 inline text-2xl max-w-[60ch] ${dm_sans.className} font-semibold hover:underline`}>
        "En nuestro camino juntos, utilizamos la Terapia Cognitivo-Conductual (TCC) como una guía práctica y
        basada en la evidencia.
      </p>

      <p className={`text-gray-500 inline text-2xl max-w-[60ch] mt-8 ${dm_sans.className} font-semibold hover:underline`}>
        {"\n"}Al comprender la conexión entre tus pensamientos, sentimientos y acciones, no solo hablamos del cambio: construimos las herramientas para hacerlo realidad."
      </p>

    </div>
  )
}

