export const FontColors = {
  white: "white",
  black: "black"
} as const;

export type FontColorsType = typeof FontColors[keyof typeof FontColors];

export const BackgroundColors = {
  white: "bg-white",
  black: "bg-black",
  purple: "bg-purple-100/50",
  mauve_light: "bg-mauve-300",
  mauve_dark: "bg-mauve-900",
  mauve_black: "bg-mauve-950",
} as const;

export type BackgroundColorsType = typeof BackgroundColors[keyof typeof BackgroundColors];
