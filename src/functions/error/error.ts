import { COLORS } from "../../constants";
import { colorizeText } from "../../utils/colorizeText";

export const error = (message: string) => {
  const label = colorizeText("[ERROR]", COLORS.red);
  const messageColorized = colorizeText(message, COLORS.red);

  console.error(`${label} ${messageColorized}`);
};
