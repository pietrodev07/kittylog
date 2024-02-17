import { COLORS } from "../../constants";
import { colorsProvider } from "../../global";

export const warning = (message: string): void => {
  const { colorizeText, buidlCompleteMessage } = colorsProvider;

  const label = colorizeText("[WARNING]", COLORS.yellow);
  const messageColorized = colorizeText(message, COLORS.yellow);

  console.warn(...buidlCompleteMessage([label, messageColorized]));
};
