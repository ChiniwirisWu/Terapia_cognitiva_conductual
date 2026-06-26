"use client";

import React from "react";

export default function Landing() {
  const handleNextSlide = () => {
    // Busca el contenedor principal con snap y hace scroll al siguiente elemento
    const mainLayout = document.querySelector("main");
    if (mainLayout) {
      mainLayout.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full max-w-xl px-4 text-center flex flex-col items-center justify-center animate-fade-in">
      <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight leading-none text-white">
        Reestructura tu Mente
      </h1>
      <p className="text-base md:text-lg text-gray-300 mb-8 max-w-md leading-relaxed">
        Identifica, analiza y transforma tus pensamientos automáticos negativos mediante Terapia Cognitiva Conductual.
      </p>
      
      <button
        onClick={handleNextSlide}
        type="button"
        className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-xl shadow-lg hover:bg-gray-100 transition-all active:scale-95 text-base"
      >
        Comenzar Registro
      </button>
    </div>
  );
}

