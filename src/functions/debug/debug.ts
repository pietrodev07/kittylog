import { COLORS } from "../../constants";
import { colorsProvider } from "../../global";

export const debug = (message: string, data: unknown) => {
  const { colorizeText, buidlCompleteMessage } = colorsProvider;

  const timestamp = new Date().toLocaleTimeString();

  const label = colorizeText("[DEBUG]", COLORS.yellow);
  const timestampLabel = colorizeText(timestamp, COLORS.magenta);

  console.log(...buidlCompleteMessage([label, timestampLabel]), `\n${message}:`, data);
};
