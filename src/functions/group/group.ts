import { COLORS } from "../../constants";
import { colorsProvider } from "../../global";
import { Color, GroupType } from "../../types";

export const group = (title: string, color?: Color, type: GroupType = "NORMAL") => {
  const { colorizeText, buildCompleteMessage } = colorsProvider;
  const selectedColor = color in COLORS ? COLORS[color] : COLORS.magenta;

  const label = colorizeText(`[${title}]`, selectedColor);
  const completeMessage = buildCompleteMessage([label]);

  if (type === "NORMAL") {
    console.group(...completeMessage);
  } else {
    console.groupCollapsed(...completeMessage);
  }

  return {
    end: () => {
      console.groupEnd();
    },
  };
};
