"use client";

import { Toaster } from "sonner";

import { FontColors, BackgroundColors } from "@constants/constants"

import SlideSection from "@components/slideSection"

import List from "@slides/list";


type LogsProps = {
  content: {
    costo_beneficio: string,
    creencias_contraproducentes: string[],
    distorsiones_cognitivas: string[],
    emociones: string[],
    fecha: string,
    genre: string,
    pensamiento_negativo: string,
    pensamiento_positivo: string,
    suceso_transtornador: string,
    _id: string
  }[]
};

export default function Logs({ content }: LogsProps) {


  return (
    <main className="min-h-screen w-full overflow-x-hidden scroll-smooth relative z-0">
      <SlideSection color={FontColors.white} backgroundColor={BackgroundColors.mauve_black}>
        <List content={content} />
      </SlideSection>

      <Toaster
        position="bottom-right"
      />
    </main>
  )
}
