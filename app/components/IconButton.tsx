import { IconType } from "react-icons"
import { FontColorsType } from "@/constants"

type IconButtonProps = {
  Icon: IconType,
  textSize?: string,
  blur?: boolean,
  textColor: FontColorsType
};

export default function IconButton({
  Icon,
  textSize,
  blur,
  textColor
}: IconButtonProps) {

  if (!textColor) textColor == "white"

  return (
    <div
      className={`grid place-content-center text-lg p-3 rounded cursor-pointer text-${textColor}
      ${blur && 'bg-gray-500/20'}`}>

      <Icon className={textSize} />
    </div>
  )
};

