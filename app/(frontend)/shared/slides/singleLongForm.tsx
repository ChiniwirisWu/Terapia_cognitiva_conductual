type MainContentProps = {
  question: string,
  description: string,
  value: string,
  setValue: (value: string) => void,
  topic?: string
}

export default function SingleLongForm({ question, description, value, setValue, topic }: MainContentProps) {
  return (
    <div className="pt-50 px-20">
      <form className="w-full">
        <div className="flex-col justify-between w-full items-center mb-5">
          <p className="text-lg font-bold">{question}</p>
          <p className="text-sm">({description} {topic ? <span className="font-semibold">{`"${topic}"`}</span> : null})</p>
        </div>

        <div className="w-full">
          <textarea className="w-full border rounded-lg border-gray-400 outline-none 
            focus:shadow px-2 py-2 h-24"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="..."
          />
        </div>
      </form>
    </div>
  )
}
