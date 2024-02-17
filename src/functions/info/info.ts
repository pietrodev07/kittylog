import { COLORS } from "../../constants";
import { colorsProvider } from "../../global";

export const info = (message: string) => {
  const { colorizeText, buidlCompleteMessage } = colorsProvider;

  const label = colorizeText("[INFO]", COLORS.cyan);
  const messageColorized = colorizeText(message, COLORS.cyan);

  console.info(...buidlCompleteMessage([label, messageColorized]));
};
