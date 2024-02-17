import { Platform } from "./types";
import { getColorsProvider } from "./utils/colorsProvider";

const getPlatform = (): Platform => {
  if (globalThis.window) {
    return "BROWSER";
  }

  if (globalThis.global) {
    return "NODE";
  }
};

const platform = getPlatform();
export const colorsProvider = getColorsProvider(platform);
