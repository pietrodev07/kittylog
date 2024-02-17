import { COLORS, LINE_TYPES } from "../constants";

export type Color = keyof typeof COLORS;
export type LineType = keyof typeof LINE_TYPES;

export interface PerformanceSettings {
  start: number | null;
  action: string | null;
}
