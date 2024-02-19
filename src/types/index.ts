import { COLORS, LINE_TYPES } from "../constants";

export type Color = keyof typeof COLORS;
export type LineType = keyof typeof LINE_TYPES;

export interface PerformanceStack {
  start: number | null;
  action: string | null;
}

export type Platform = "NODE" | "BROWSER";

export interface PlatformProviderProtocol {
  colorizeText(label: string, color: string): Array<string>;
  buildCompleteMessage?(labels: Array<Array<string>>): Array<string>;
}
