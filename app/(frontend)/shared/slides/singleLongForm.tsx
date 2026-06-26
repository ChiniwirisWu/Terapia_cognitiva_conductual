"use client";

import React from "react";

type SingleLongFormProps = {
  question: string;
  description?: string;
  value: string;
  setValue: (value: string) => void;
  topic?: string;
};

export default function SingleLongForm({ question, description, value, setValue, topic }: SingleLongFormProps) {
  return (
    <div className="w-full max-w-2xl px-4 flex flex-col justify-center h-full max-h-[85vh]">
      {/* Tarjeta de contexto/tópico adaptable */}
      {topic && (
        <div className="w-full p-3 md:p-4 bg-black/10 rounded-xl mb-6 border border-white/5 backdrop-blur-sm">
          <span className="text-[10px] uppercase tracking-wider opacity-50 font-bold block mb-1">
            Pensamiento bajo análisis:
          </span>
          <p className="text-sm md:text-base font-medium italic opacity-90 line-clamp-2">
            "{topic}"
          </p>
        </div>
      )}

      <h2 className="text-2xl md:text-4xl font-extrabold mb-2 tracking-tight leading-tight">
        {question}
      </h2>

      {description && (
        <p className="text-sm md:text-base opacity-70 mb-4">
          {description}
        </p>
      )}

      {/* Textarea optimizado para no romper la pantalla móvil */}
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Escribe tu análisis detallado aquí..."
        rows={4}
        className="w-full mt-2 p-4 bg-black/20 text-white placeholder:text-white/30 rounded-xl border border-white/10 focus:border-white/40 focus:outline-none text-base md:text-lg resize-none shadow-inner h-32 md:h-44 transition-all"
      />

      <span className="text-[11px] opacity-40 mt-3 text-center md:text-right block">
        Usa el scroll vertical para navegar por las secciones
      </span>
    </div>
  );
}