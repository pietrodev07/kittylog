import { COLORS } from "../../constants";
import { colorizeText } from "../../utils/colorizeText";

export const performance = (action: string) => {
  const label = colorizeText("[PERFORMANCE]", COLORS.cyan);

  console.time(`${label} ${action}`);
};

export const performanceEnd = (action: string) => {
  const label = colorizeText("[PERFORMANCE]", COLORS.cyan);
  console.timeEnd(`${label} ${action}`);
};
