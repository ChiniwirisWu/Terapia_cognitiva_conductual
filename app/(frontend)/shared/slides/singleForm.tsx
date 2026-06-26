"use client";

import React from "react";

type SingleFormProps = {
  value: string;
  setValue: (value: string) => void;
  question: string;
  description?: string;
};

export default function SingleForm({ value, setValue, question, description }: SingleFormProps) {
  return (
    <div className="w-full max-w-2xl px-4 flex flex-col justify-center text-center md:text-left">
      <h2 className="text-2xl md:text-4xl font-extrabold mb-2 tracking-tight leading-tight text-current">
        {question}
      </h2>
      
      {description && (
        <p className="text-sm md:text-base opacity-70 mb-6 max-w-xl">
          {description}
        </p>
      )}

      <div className="w-full relative mt-4">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Escribe aquí..."
          className="w-full bg-transparent border-b-2 border-current/30 focus:border-current py-3 text-xl md:text-3xl font-medium outline-none transition-colors placeholder:opacity-30 pb-2"
        />
      </div>
      
      <span className="text-[11px] opacity-40 mt-4 block text-right">
        Desliza hacia abajo para continuar
      </span>
    </div>
  );
}