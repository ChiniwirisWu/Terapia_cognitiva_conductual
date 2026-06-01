import SlideSection from "@/components/slideSection"
import { FontColorsType, FontColors, BackgroundColors } from "@/constants"
import { content } from "./content"

import Landing from "@/slides/landing"
import SingleForm from "@/slides/singleForm"
import SingleLongForm from "@/slides/singleLongForm"
import MultipleSelector from "@/slides/multipleSelector"
import SaveForm from "@/slides/saveForm"


export default function Hero() {

  return (
    <main className="snap-y snap-mandatory h-screen w-full overflow-x-hidden scroll-smooth overflow-y-auto relative z-0">
      <SlideSection color={FontColors.white} backgroundColor={BackgroundColors.mauve_black}>
        <Landing />
      </SlideSection>

      <SlideSection color={FontColors.black} backgroundColor={BackgroundColors.white}>
        <SingleForm question={content.suceso_transtornador.question} description={content.suceso_transtornador.description} />
      </SlideSection>

      <SlideSection color={FontColors.white} backgroundColor={BackgroundColors.mauve_dark}>
        <MultipleSelector question={content.emociones.question} options={content.emociones.options} />
      </SlideSection>

      <SlideSection color={FontColors.black} backgroundColor={BackgroundColors.white}>
        <SingleForm question={content.pensamiento.question} description={content.pensamiento.description} />
      </SlideSection>

      <SlideSection color={FontColors.white} backgroundColor={BackgroundColors.mauve_black}>
        <MultipleSelector question={content.distorsiones_cognitivas.question} options={content.distorsiones_cognitivas.options} />
      </SlideSection>

      <SlideSection color={FontColors.black} backgroundColor={BackgroundColors.white}>
        <SingleLongForm question={content.costo_beneficio.question} description={content.costo_beneficio.description} />
      </SlideSection>

      <SlideSection color={FontColors.black} backgroundColor={BackgroundColors.white}>
        <SingleLongForm question={content.pensamiento_positivo.question} description={content.pensamiento_positivo.description} />
      </SlideSection>

      <SlideSection color={FontColors.white} backgroundColor={BackgroundColors.mauve_dark}>
        <MultipleSelector question={content.creencias_contraproducentes.question} options={content.creencias_contraproducentes.options} />
      </SlideSection>

      <SlideSection color={FontColors.white} backgroundColor={BackgroundColors.mauve_black}>
        <SaveForm />
      </SlideSection>
    </main>
  )
}
