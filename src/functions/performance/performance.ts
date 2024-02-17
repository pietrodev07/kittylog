import { COLORS } from "../../constants";
import { colorsProvider } from "../../global";
import { PerformanceSettings } from "../../types";
import { nowPerformance } from "../../utils/nowPerformance";

const performanceStack: PerformanceSettings[] = [];

export const performanceEnd = (action: string) => {
  const { colorizeText, buidlCompleteMessage } = colorsProvider;
  const { start } = performanceStack.pop();

  const label = colorizeText("[PERFORMANCE]", COLORS.cyan);

  const end = nowPerformance();
  const duration = end - start;

  console.log(...buidlCompleteMessage([label]), `${action}:`, `${duration.toFixed(3)}ms`);
};

export const performance = (action: string) => {
  const start = nowPerformance();
  performanceStack.push({ action, start });

  return {
    end: () => performanceEnd(action),
  };
};
