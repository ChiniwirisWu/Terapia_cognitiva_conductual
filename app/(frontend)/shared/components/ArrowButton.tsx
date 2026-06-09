import { IoMdArrowDropdown } from "react-icons/io";

type ArrowButtonProps = {
  selected: boolean,
  setSelected: (selected: boolean) => void
}

export default function ArrowButton({ selected, setSelected }: ArrowButtonProps) {

  return (
    <button
      onClick={() => setSelected(!selected)}
      className="flex justify-center items-center hover:bg-gray-200/20 rounded-full size-10 cursor-pointer"
    >
      <span className={`
        flex justify-center items-center text-2xl
        transition-transform duration-200 ease-in-out
        ${selected ? "rotate-180" : "rotate-0"}
        `}>
        <IoMdArrowDropdown />
      </span>
    </button>
  );
};
