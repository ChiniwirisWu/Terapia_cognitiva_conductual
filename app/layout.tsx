import React from 'react';

import { Metadata } from "next";
import Header from "@components/header";
import PageProvider from '@components/pageProvider';
import { dm_sans } from '@constants/fonts';
import '@constants/global.css';

export const metadata: Metadata = {
  title: 'Terapia Cognitiva Conductual | Transforma tus Pensamientos',
  description: 'Espacio profesional de Terapia Cognitiva Conductual para el manejo de la ansiedad, estrés y crecimiento personal.',
  keywords: ['terapia cognitiva conductual', 'salud mental', 'superar ansiedad', 'psicoterapia'],
  // 2. Open Graph (Facebook, WhatsApp, LinkedIn)
  openGraph: {
    title: '🧠 Terapia Cognitiva Conductual | Psicología Efectiva',
    description: '¿Buscas herramientas prácticas para tu bienestar? Agenda tu sesión de Terapia Cognitiva Conductual hoy.',
    url: 'https://tusitioweb.com',
    siteName: 'TCC Bienestar',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: 'https://tusitioweb.com/images/og-share-image.png', // Ruta absoluta a tu imagen de 1200x630
        width: 1200,
        height: 630,
        alt: 'Vista previa de la plataforma de Terapia Cognitiva Conductual',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '🧠 Terapia Cognitiva Conductual',
    description: 'Herramientas prácticas para transformar tus pensamientos y mejorar tu salud mental.',
    images: ['https://tusitioweb.com/images/og-share-image.png'], // Reutiliza la misma imagen o una específica
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html className='scrollbar-gutter-stable'>
      <body>
        {/* returns the current page to his children */}
        <PageProvider>
          <div className={`relative ${dm_sans.className}`}>

            <div className='absolute top-0 w-full'>
              <Header />
            </div>

            {children}

          </div>
        </PageProvider>
      </body>
    </html>
  )
}
