import { COLORS } from "../../constants";
import { PerformanceSettings } from "../../types";
import { colorizeText } from "../../utils/colorizeText";
import { nowPerformance } from "../../utils/nowPerformance";

const performanceStack: PerformanceSettings[] = [];

export const performanceEnd = (action: string) => {
  const { start } = performanceStack.pop();

  const label = colorizeText("[PERFORMANCE]", COLORS.cyan);

  const end = nowPerformance();
  const duration = end - start;

  console.log(label, `${action}:`, `${duration.toFixed(3)}ms`);
};

export const performance = (action: string) => {
  const start = nowPerformance();
  performanceStack.push({ action, start });

  return {
    end: () => performanceEnd(action),
  };
};
