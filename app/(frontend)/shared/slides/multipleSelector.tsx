type MultipleSelectorProps = {
  question: string,
  options: string[],
  items: string[],
  setItems: (value: string[]) => void
};

export default function MultipleSelector({ question, options, items, setItems }: MultipleSelectorProps) {

  // identificar si el boton esta seleccionado y cambiar su estado de activo a inactivo. //IMPORTANTE: Los nombres de mis funciones pueden ser expresivos y el contenido de ellos genericos.
  const updateOptionsSelected = (currentItem: string) => {
    const newItems = [...items];
    const currentItemIndex = items.indexOf(currentItem);
    const isAlreadySelected = currentItemIndex > -1;

    if (isAlreadySelected) {
      // if exist, remove it from the list
      newItems.splice(currentItemIndex, 1);
    } else {
      // if it isnt, add it to the list
      newItems.push(currentItem);
    }

    setItems(newItems);
  }

  return (
    <div className="pt-30 px-10 text-white">
      <div className="flex-col justify-between w-full items-center mb-5">
        <p className="text-lg font-bold mb-8">{question}</p>

        <div className="flex flex-wrap gap-5 w-full justify-center cursor-pointer">
          {options.map((option, index) => {
            return (
              <Option
                key={`multiple-selector-${index}`}
                currentOption={option}
                optionsSelected={items}
                updateOptionsSelected={updateOptionsSelected}
              />
            )
          })}
        </div>
      </div>
    </div >
  )
}

type SelectorOptionProps = {
  currentOption: string, // current option
  optionsSelected: string[], // list of the options states
  updateOptionsSelected: (currentOption: string) => void
}


function Option({ currentOption, optionsSelected, updateOptionsSelected }: SelectorOptionProps) {
  const stateStyles = {
    selected: "bg-white text-black scale-105",
    unselected: "hover:scale-105 active:scale-110"
  }

  const isSelected = optionsSelected.indexOf(currentOption) > -1;
  // this flag is to add a font-bold if needed
  const hasTitle = currentOption.indexOf(':');

  return (
    <button
      className="cursor-pointer"
      onClick={() => updateOptionsSelected(currentOption)}
    >
      <div className={
        `flex px-2 py-2 items-center transition-all duration-300 
        w-80 h-30 border rounded-lg border-gray-200 
        ${!isSelected && stateStyles.unselected}
        ${isSelected && stateStyles.selected}
      `}>
        {hasTitle ? (
          <>
            <p className="px-2 py-2">
              <span className="text-center select-none font-bold inline">{currentOption.slice(0, currentOption.indexOf(':'))}</span>
              <span className="text-center select-none inline">{currentOption.slice(currentOption.indexOf(':'))}</span>
            </p>
          </>
        ) : (
          <p className="text-center select-none">{currentOption}</p>
        )}
      </div>
    </button >
  )
}
