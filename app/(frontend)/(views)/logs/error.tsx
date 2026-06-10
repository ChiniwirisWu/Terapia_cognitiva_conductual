// /frontend/views/blueprints/error.tsx
'use client'; // Los componentes de error DEBEN ser Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Aquí puedes reportar el error a servicios como Sentry o Datadog
    console.error("Error capturado por Next.js:", error);
  }, [error]);

  return (
    <div className="p-6 text-center space-y-4">
      <h2 className="text-xl font-bold text-red-600">¡Algo salió mal en el servidor!</h2>
      <p className="text-gray-600">No pudimos recuperar los planos en este momento.</p>
      <button
        onClick={() => reset()} // Intenta volver a renderizar la página
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Reintentar
      </button>
    </div>
  );
}
