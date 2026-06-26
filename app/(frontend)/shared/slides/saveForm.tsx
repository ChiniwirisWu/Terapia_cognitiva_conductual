"use client";

import React from "react";

type SaveFormProps = {
  submitHandler: () => void;
};

export default function SaveForm({ submitHandler }: SaveFormProps) {
  return (
    // Cambiamos pt-50 y px-20 fijos por un padding fluido y centrado absoluto
    <div className="w-full max-w-sm px-6 text-white flex flex-col justify-center items-center animate-fade-in">
      <form className="w-full" action="#">
        <div className="flex flex-col justify-center items-center w-full">
          
          {/* Un icono o detalle visual opcional que suma a la experiencia */}
          <div className="text-4xl md:text-5xl mb-4 animate-bounce">🎉</div>

          {/* Texto adaptable: text-3xl en móvil, text-4xl en pantallas grandes */}
          <p className="text-center text-3xl md:text-4xl font-black mb-8 tracking-tight">
            ¡Listo por hoy!
          </p>
          
          {/* Botón con área de toque cómoda para pulgares (w-full en móviles, md:w-auto en escritorio) */}
          <button
            className="w-full sm:w-auto px-8 py-4 cursor-pointer border border-white rounded-xl 
            text-lg md:text-xl font-bold hover:text-black hover:bg-white hover:scale-105
            active:scale-95 transition-all duration-300 shadow-md min-h-[48px]"
            onClick={(e) => {
              e.preventDefault();
              submitHandler();
            }}
          >
            Guardar examen
          </button>
        </div>
      </form>
    </div>
  );
}