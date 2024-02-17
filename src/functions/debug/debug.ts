import { COLORS } from "../../constants";
import { colorsProvider } from "../../global";

export const debug = (message: string, data: unknown) => {
  const { colorizeText, buildCompleteMessage } = colorsProvider;

  const timestamp = new Date().toLocaleTimeString();

  const label = colorizeText("[DEBUG]", COLORS.yellow);
  const timestampLabel = colorizeText(timestamp, COLORS.magenta);

  console.log(...buildCompleteMessage([label, timestampLabel]), `\n${message}:`, data);
};
