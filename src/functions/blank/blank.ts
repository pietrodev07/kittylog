import { COLORS, LINE_TYPES } from "../../constants";
import { colorsProvider } from "../../global";
import { Color, LineType } from "../../types";

export const blank = (lineType?: LineType, color?: Color) => {
  const { colorizeText, buildCompleteMessage } = colorsProvider;

  const selectedLine = lineType in LINE_TYPES ? LINE_TYPES[lineType] : LINE_TYPES.default;
  const selectedColor = color in COLORS ? COLORS[color] : COLORS.default;

  console.log(...buildCompleteMessage([colorizeText(selectedLine, selectedColor)]));
};
