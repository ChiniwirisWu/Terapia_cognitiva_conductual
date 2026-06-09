"use client";
import { content } from "./content"

import { useRef } from "react"
import { useBlueprints } from "@hooks/useBlueprints";
import { FontColors, BackgroundColors } from "@constants/constants"
import { Toaster } from "sonner";

import SlideSection from "@components/slideSection"
import Landing from "@slides/landing"
import SingleForm from "@slides/singleForm"
import SingleLongForm from "@slides/singleLongForm"
import MultipleSelector from "@slides/multipleSelector"
import SaveForm from "@slides/saveForm"


export default function BlueprintsCreator() {

  const mainRef = useRef<HTMLElement>(null);
  const { states, actions } = useBlueprints(mainRef);

  return (
    <main ref={mainRef} className="snap-y snap-mandatory h-screen w-full overflow-x-hidden scroll-smooth relative z-0 [scrollbar-width:none]">
      <SlideSection color={FontColors.white} heightScreen backgroundColor={BackgroundColors.mauve_black}>
        <Landing />
      </SlideSection>

      <SlideSection color={FontColors.black} heightScreen backgroundColor={BackgroundColors.purple}>
        <SingleForm
          value={states.suceso_transtornador}
          setValue={actions.setSucesoTranstornador}
          question={content.suceso_transtornador.question}
          description={content.suceso_transtornador.description} />
      </SlideSection>

      <SlideSection color={FontColors.white} heightScreen backgroundColor={BackgroundColors.mauve_dark}>
        <MultipleSelector
          question={content.emociones.question}
          options={content.emociones.options}
          items={states.emociones}
          setItems={actions.setEmociones}
        />
      </SlideSection>

      <SlideSection color={FontColors.black} heightScreen backgroundColor={BackgroundColors.purple}>
        <SingleForm
          value={states.pensamiento_negativo}
          setValue={actions.setPensamientoNegativo}
          question={content.pensamiento.question}
          description={content.pensamiento.description}
        />
      </SlideSection>

      <SlideSection color={FontColors.white} heightScreen backgroundColor={BackgroundColors.mauve_black}>
        <MultipleSelector
          question={content.distorsiones_cognitivas.question}
          options={content.distorsiones_cognitivas.options}
          items={states.distorsiones_cognitivas}
          setItems={actions.setDistorsionesCognitivas}
        />
      </SlideSection>

      <SlideSection color={FontColors.black} heightScreen backgroundColor={BackgroundColors.purple}>
        <SingleLongForm
          question={content.costo_beneficio.question}
          description={content.costo_beneficio.description}
          value={states.costo_beneficio}
          setValue={actions.setCostoBeneficio}
          topic={states.pensamiento_negativo}
        />
      </SlideSection>

      <SlideSection color={FontColors.black} heightScreen backgroundColor={BackgroundColors.purple}>
        <SingleLongForm
          question={content.pensamiento_positivo.question}
          description={content.pensamiento_positivo.description}
          value={states.pensamiento_positivo}
          setValue={actions.setPensamientoPositivo}
          topic={states.pensamiento_negativo}
        />
      </SlideSection>

      <SlideSection color={FontColors.white} heightScreen backgroundColor={BackgroundColors.mauve_dark}>
        <MultipleSelector
          question={content.creencias_contraproducentes.question}
          options={content.creencias_contraproducentes.options}
          items={states.creencias_contraproducentes}
          setItems={actions.setCreenciasContraproducentes}
        />
      </SlideSection>

      <SlideSection color={FontColors.white} heightScreen backgroundColor={BackgroundColors.mauve_black}>
        <SaveForm submitHandler={actions.handleSendTest} />
      </SlideSection>

      <Toaster
        position="bottom-right"
      />
    </main>
  )
}
