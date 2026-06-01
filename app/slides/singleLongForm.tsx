type MainContentProps = {
  question: string,
  description: string
}

export default function SingleForm({ question, description }: MainContentProps) {
  return (
    <div className="pt-50 px-20">
      <form className="w-full">
        <div className="flex-col justify-between w-full items-center mb-5">
          <p className="text-lg font-bold">{question}</p>
          <p className="text-sm">({description})</p>
        </div>

        <div className="w-full">
          <textarea className="w-full border rounded-lg border-gray-400 outline-none focus:shadow px-2 py-2
            h-24 
            "
            placeholder="..."
          />
        </div>
      </form>
    </div>
  )
}
