// app/(frontend)/loading.tsx

export default function QuietLoading() {
  return (
    /* Contenedor principal alineado con tu estilo de página */
    <div className="min-h-screen w-full bg-slate-50 dark:bg-zinc-950 pt-40 px-6 md:px-20">

      {/* Contenedor central con animación personalizada más lenta y relajada */}
      <div className="max-w-2xl m-auto flex flex-col gap-6 animate-[pulse_2.5s_infinite] ease-in-out">


        {/* Separador sutil simulando el margen inferior del título */}
        <div className="h-2" />

        {/* --- LIST ELEMENT SKELETON 1 --- */}
        <div className="rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-zinc-900 p-5 shadow-sm flex items-center justify-between">
          <div className="space-y-3 w-3/4">
            {/* Título del registro */}
            <div className="h-5 w-2/5 bg-black/10 dark:bg-white/10 rounded-md" />
            {/* Subtexto o etiquetas de emociones */}
            <div className="h-3 w-3/5 bg-black/5 dark:bg-white/5 rounded-md" />
          </div>
          {/* El botón de la flecha simulado en un círculo perfecto */}
          <div className="size-10 bg-black/5 dark:bg-white/5 rounded-full" />
        </div>

        {/* --- LIST ELEMENT SKELETON 2 --- */}
        <div className="rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-zinc-900 p-5 shadow-sm flex items-center justify-between">
          <div className="space-y-3 w-3/4">
            <div className="h-5 w-1/2 bg-black/10 dark:bg-white/10 rounded-md" />
            <div className="h-3 w-2/3 bg-black/5 dark:bg-white/5 rounded-md" />
          </div>
          <div className="size-10 bg-black/5 dark:bg-white/5 rounded-full" />
        </div>

        {/* --- LIST ELEMENT SKELETON 3 --- */}
        <div className="rounded-xl border border-black/5 dark:border-white/5 bg-white dark:bg-zinc-900 p-5 shadow-sm flex items-center justify-between">
          <div className="space-y-3 w-3/4">
            <div className="h-5 w-1/3 bg-black/10 dark:bg-white/10 rounded-md" />
            <div className="h-3 w-1/2 bg-black/5 dark:bg-white/5 rounded-md" />
          </div>
          <div className="size-10 bg-black/5 dark:bg-white/5 rounded-full" />
        </div>

      </div>
    </div>
  );
}
