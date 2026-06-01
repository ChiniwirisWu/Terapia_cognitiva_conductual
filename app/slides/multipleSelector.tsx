"use client"

import { useState } from "react"

type MultipleSelectorProps = {
  question: string,
  options: string[],
};

export default function MultipleSelector({ question, options }: MultipleSelectorProps) {

  const [optionsSelected, setOptionsSelected] = useState<string[]>([]);

  // identificar si el boton esta seleccionado y cambiar su estado de activo a inactivo.
  const updateOptionsSelected = (currentOption: string) => {
    const newOptionsSelected = [...optionsSelected];
    const currentOptionIndex = optionsSelected.indexOf(currentOption)

    if (currentOptionIndex > -1) {
      // if exist 
      newOptionsSelected.splice(currentOptionIndex, 1);
    } else {
      // if it isnt
      newOptionsSelected.push(currentOption);
    }

    setOptionsSelected(newOptionsSelected);
  }

  return (
    <div className="pt-30 px-10 text-white">
      <div className="flex-col justify-between w-full items-center mb-5">
        <p className="text-lg font-bold mb-8">{question}</p>

        <div className="flex flex-wrap gap-5 w-full justify-center cursor-pointer">
          {options.map((option, index) => {
            return (
              <SelectorOption
                key={`multiple-selector-${index}`}
                currentOption={option}
                optionsSelected={optionsSelected}
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


function SelectorOption({ currentOption, optionsSelected, updateOptionsSelected }: SelectorOptionProps) {
  const selectedStyle = "bg-white text-black scale-105";
  const isSelected = optionsSelected.indexOf(currentOption) > -1;
  const notSelectedStyle = "hover:scale-105 active:scale-110"

  const hasTitle = currentOption.indexOf(':');

  return (
    <button
      className="cursor-pointer"
      onClick={() => updateOptionsSelected(currentOption)}
    >
      <div className={
        `flex px-2 py-2 items-center transition-all duration-300 
        w-80 h-30 border rounded-lg border-gray-200 
        ${!isSelected && notSelectedStyle}
        ${isSelected && selectedStyle}
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
