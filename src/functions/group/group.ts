import { COLORS } from "../../constants";
import { colorsProvider } from "../../global";
import { Color } from "../../types";

export const group = (title: string, color?: Color) => {
  const { colorizeText, buildCompleteMessage } = colorsProvider;
  const selectedColor = color in COLORS ? COLORS[color] : COLORS.magenta;
  const label = colorizeText(`[${title}]`, selectedColor);
  console.group(...buildCompleteMessage([label]));
};

export const groupCollapsed = (title: string, color?: Color) => {
  const { colorizeText, buildCompleteMessage } = colorsProvider;
  const selectedColor = color in COLORS ? COLORS[color] : COLORS.magenta;
  const label = colorizeText(`[${title}]`, selectedColor);
  console.groupCollapsed(...buildCompleteMessage([label]));
};

export const groupEnd = () => {
  console.groupEnd();
};
