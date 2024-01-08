import { COLORS } from "../../constants";
import { colorizeText } from "../../utils/colorizeText";

export const warning = (message: string): void => {
  const label = colorizeText("[WARNING]", COLORS.yellow);
  const messageColorized = colorizeText(message, COLORS.yellow);

  console.warn(`${label} ${messageColorized}`);
};
