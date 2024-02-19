import { COLORS } from "../../constants";
import { colorsProvider } from "../../global";

export const info = (message: string) => {
  const { colorizeText, buildCompleteMessage } = colorsProvider;

  const label = colorizeText("[INFO]", COLORS.cyan);
  const messageColorized = colorizeText(message, COLORS.cyan);

  console.info(...buildCompleteMessage([label, messageColorized]));
};
