import { COLORS } from "../../constants";
import { colorsProvider } from "../../global";

export const warning = (...message: string[]): void => {
  const { colorizeText, buildCompleteMessage } = colorsProvider;

  const label = colorizeText("[WARNING]", COLORS.yellow);
  const messageColorized = colorizeText(message.join(" "), COLORS.yellow);

  console.warn(...buildCompleteMessage([label, messageColorized]));
};
