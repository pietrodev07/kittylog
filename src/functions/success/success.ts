import { COLORS } from "../../constants";
import { colorsProvider } from "../../global";

export const success = (message: string) => {
  const { colorizeText, buidlCompleteMessage } = colorsProvider;

  const label = colorizeText("[SUCCESS]", COLORS.green);
  const messageColorized = colorizeText(message, COLORS.green);

  console.log(...buidlCompleteMessage([label, messageColorized]));
};
