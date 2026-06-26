"use client";

import React, { useState } from "react";
import { LogsType } from "@types";

type ListProps = {
  content: LogsType[];
};

export default function List({ content }: ListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filtro básico e interactivo para móviles
  const filteredContent = content.filter((log) =>
    log.pensamiento_negativo?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    log.suceso_transtornador?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-6 flex flex-col gap-6">
      
      {/* Cabecera del Listado e Input de búsqueda responsivo */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-white/10">
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white">
            Historial de Registros
          </h2>
          <p className="text-xs md:text-sm text-gray-400 mt-1">
            Visualiza y analiza la evolución de tus patrones de pensamiento.
          </p>
        </div>

        {/* Input táctil cómodo para el pulgar en móviles */}
        <input
          type="text"
          placeholder="Buscar registros..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-64 bg-white/5 border border-white/10 focus:border-purple-500 focus:outline-none p-3 rounded-xl text-sm transition-all placeholder:text-gray-500 text-white"
        />
      </div>

      {/* Estado vacío amigable */}
      {filteredContent.length === 0 ? (
        <div className="w-full py-12 text-center bg-white/[0.02] border border-dashed border-white/10 rounded-2xl">
          <p className="text-gray-400 text-sm">No se encontraron registros de TCC.</p>
        </div>
      ) : (
        /* GRID RESPONSIVO CRÍTICO:
          - 1 columna en teléfonos (w-full)
          - 2 columnas en tablets (sm:grid-cols-2)
          - 3 columnas en laptops/escritorios (lg:grid-cols-3)
        */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {filteredContent.map((log, index) => (
            <div
              key={`log-card-${index}`}
              className="w-full bg-white/[0.03] border border-white/5 hover:border-white/20 p-5 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:shadow-xl active:scale-[0.99] backdrop-blur-md"
            >
              <div>
                {/* Metadatos superiores / Badge de Emociones */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {Array.isArray(log.emociones) ? (
                    log.emociones.map((emocion, i) => (
                      <span key={i} className="text-[10px] bg-purple-500/10 text-purple-300 px-2.5 py-1 rounded-md font-medium tracking-wide">
                        {emocion}
                      </span>
                    ))
                  ) : (
                    <span className="text-[10px] bg-white/5 text-gray-400 px-2 py-0.5 rounded">
                      Registro TCC
                    </span>
                  )}
                </div>

                {/* Sección Situación / Suceso */}
                <div className="mb-4 text-left">
                  <h4 className="text-[10px] uppercase font-bold tracking-wider text-gray-500 mb-1">Situación</h4>
                  <p className="text-sm text-gray-200 line-clamp-2 leading-relaxed">
                    {log.suceso_transtornador || "No especificado"}
                  </p>
                </div>

                {/* Bloques de Pensamientos con line-clamp para no romper la altura en mobile */}
                <div className="space-y-3 pt-3 border-t border-white/5 text-left">
                  <div>
                    <h4 className="text-[10px] uppercase font-bold tracking-wider text-red-400/80 mb-1">Pensamiento Automático</h4>
                    <p className="text-sm text-gray-300 font-medium italic line-clamp-2">
                      "{log.pensamiento_negativo || "—"}"
                    </p>
                  </div>

                  {log.pensamiento_positivo && (
                    <div>
                      <h4 className="text-[10px] uppercase font-bold tracking-wider text-emerald-400/80 mb-1">Pensamiento Alternativo</h4>
                      <p className="text-sm text-gray-300 font-medium italic line-clamp-2">
                        "{log.pensamiento_positivo}"
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Botón expandido interactivo */}
              <button
                type="button"
                className="w-full mt-5 py-3 bg-white/5 hover:bg-white text-white hover:text-black font-bold rounded-xl text-xs transition-all flex items-center justify-center gap-1 min-h-[44px]"
              >
                Ver Detalle Completo
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}