"use client";

import { Toaster } from "sonner";
import { FontColors, BackgroundColors } from "@constants/constants"
import SlideSection from "@components/slideSection"
import List from "@slides/list";
import { LogsType } from "@types"

export default function LogsCreator({ contentJSON }: { contentJSON: string }) {
  const content = JSON.parse(contentJSON) as LogsType[];

  return (
    // min-h-dvh se adapta dinámicamente si el teclado o las barras del navegador móvil se abren
    <main className="min-h-dvh w-full overflow-x-hidden overflow-y-auto bg-[#121016] relative z-0">
      <SlideSection color={FontColors.white} backgroundColor={BackgroundColors.mauve_black}>
        <List content={content} />
      </SlideSection>

      <Toaster position="bottom-right" />
    </main>
  )
}