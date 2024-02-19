import { COLORS } from "../../constants";
import { colorsProvider } from "../../global";
import { Color } from "../../types";

export const custom = (color: Color, label: string, message: string) => {
  const { colorizeText, buildCompleteMessage } = colorsProvider;

  const labelMessage = colorizeText(`[${label}]`, COLORS[color]);
  const messageColorized = colorizeText(message, COLORS[color]);

  console.log(...buildCompleteMessage([labelMessage, messageColorized]));
};
