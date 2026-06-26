type SingleFormProps = {
  question: string,
  description: string,
  value: string,
  setValue: (value: string) => void
};

export default function SingleForm({ question, description, value, setValue }: SingleFormProps) {
  return (
    <div className="pt-50 px-20">
      <form className="w-full">
        <div className="flex justify-between w-full items-center mb-5">
          <p className="text-lg font-bold">{question}</p>
          <p className="text-sm">({description})</p>
        </div>

        <div className="w-full">
          <textarea className="w-full border rounded-lg border-gray-400 
            outline-none focus:shadow px-2 py-2h-24"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="..."
          />
        </div>
      </form>
    </div>
  )
}
