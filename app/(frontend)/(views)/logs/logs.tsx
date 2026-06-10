"use client";

import { Toaster } from "sonner";

import { FontColors, BackgroundColors } from "@constants/constants"

import SlideSection from "@components/slideSection"

import List from "@slides/list";

import { LogsType } from "@types"

type LogstCreatorProps = {
  content: LogsType[]
};

export default function LogsCreator({ content }: LogstCreatorProps) {

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
