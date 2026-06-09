type SaveFormProps = {
  submitHandler: () => void
};


export default function SaveForm({ submitHandler }: SaveFormProps) {
  return (
    <div className="pt-50 px-20 text-white">
      <form className="w-full" action="#">
        <div className="flex flex-col justify-center items-center">

          <p className="text-center text-4xl mt-20 mb-20">Listo por hoy!</p>
          <button
            className="px-10 py-5 cursor-pointer border rounded-lg 
            text-2xl hover:text-black hover:bg-white hover:scale-105
            transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              submitHandler()
            }}
          >Guardar exámen</button>
        </div>
      </form>
    </div>
  )
}
