import { COLORS } from "../../constants";
import { colorizeText } from "../../utils/colorizeText";

export const performance = (action: string, timeTaken: number) => {
  const formattedTime = timeTaken < 1000 ? `${timeTaken}ms` : `${(timeTaken / 1000).toFixed(2)}s`;
  const label = colorizeText("[PERFORMANCE]", COLORS.cyan);

  console.log(`${label} ${action} - Time taken: ${formattedTime}`);
};
