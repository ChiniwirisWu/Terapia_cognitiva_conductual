"use client";

import React from "react";

type MultipleSelectorProps = {
  question: string;
  options: string[];
  items: string[];
  setItems: (value: string[]) => void;
};

export default function MultipleSelector({ question, options, items, setItems }: MultipleSelectorProps) {

  const updateOptionsSelected = (currentItem: string) => {
    const newItems = [...items];
    const currentItemIndex = items.indexOf(currentItem);
    const isAlreadySelected = currentItemIndex > -1;

    if (isAlreadySelected) {
      newItems.splice(currentItemIndex, 1);
    } else {
      newItems.push(currentItem);
    }

    setItems(newItems);
  };

  return (
    // Reemplazamos pt-30 duro por un padding responsivo equilibrado
    <div className="w-full max-w-4xl px-4 text-white flex flex-col items-center">
      <div className="w-full flex flex-col items-center mb-5">
        {/* Pregunta adaptable */}
        <p className="text-xl md:text-3xl font-black mb-6 text-center tracking-tight leading-tight max-w-2xl">
          {question}
        </p>

        {/* Cambiamos el flex-wrap ciego por una Grid responsiva:
          - 1 columna en móviles (w-full)
          - 2 columnas en pantallas medianas en adelante (sm:grid-cols-2)
          - max-h controla que si hay muchas distorsiones, se haga scroll interno sin romper el snap
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-h-[55vh] overflow-y-auto pr-1 scrollbar-thin select-none">
          {options.map((option, index) => {
            return (
              <Option
                key={`multiple-selector-${index}`}
                currentOption={option}
                optionsSelected={items}
                updateOptionsSelected={updateOptionsSelected}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

type SelectorOptionProps = {
  currentOption: string;
  optionsSelected: string[];
  updateOptionsSelected: (currentOption: string) => void;
};

function Option({ currentOption, optionsSelected, updateOptionsSelected }: SelectorOptionProps) {
  const stateStyles = {
    // Agregamos transiciones y sombras para una experiencia premium
    selected: "bg-white text-black font-semibold shadow-lg shadow-white/5 border-white",
    unselected: "bg-white/5 border-white/10 hover:border-white/30 active:scale-[0.98]"
  };

  const isSelected = optionsSelected.indexOf(currentOption) > -1;
  const separatorIndex = currentOption.indexOf(':');
  const hasTitle = separatorIndex > -1;

  return (
    <button
      className="w-full text-left outline-none focus:outline-none"
      onClick={() => updateOptionsSelected(currentOption)}
      type="button"
    >
      {/* EL CAMBIO CLAVE: 
        Eliminamos w-80 y h-30 duros. Ahora usa w-full y min-h-[64px]. 
        El contenedor crecerá orgánicamente según el texto sin romperse jamás.
      */}
      <div className={`flex p-4 items-center transition-all duration-200 
        w-full min-h-[64px] border rounded-xl text-sm md:text-base leading-relaxed
        ${isSelected ? stateStyles.selected : stateStyles.unselected}
      `}>
        {hasTitle ? (
          <p className="w-full text-left break-words">
            <span className="font-bold underline decoration-purple-500/40 block sm:inline mr-1">
              {currentOption.slice(0, separatorIndex)}:
            </span>
            <span className="opacity-90">
              {currentOption.slice(separatorIndex + 1)}
            </span>
          </p>
        ) : (
          <p className="w-full text-left break-words">{currentOption}</p>
        )}
      </div>
    </button>
  );
}