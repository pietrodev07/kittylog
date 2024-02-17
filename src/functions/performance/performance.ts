import { COLORS } from "../../constants";
import { colorsProvider } from "../../global";
import { PerformanceStack } from "../../types";

const performanceStack: PerformanceStack[] = [];
const getPerformanceTimestamp = global.performance;

export const performance = (action: string) => {
  const start = getPerformanceTimestamp.now();
  performanceStack.push({ action, start });

  return {
    end: () => {
      const { colorizeText, buidlCompleteMessage } = colorsProvider;
      const { start } = performanceStack.pop();

      const label = colorizeText("[PERFORMANCE]", COLORS.cyan);

      const end = getPerformanceTimestamp.now();
      const duration = end - start;

      console.log(...buidlCompleteMessage([label]), `${action}:`, `${duration.toFixed(3)}ms`);
    },
  };
};
