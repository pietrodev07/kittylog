import { COLORS } from "../../constants";
import { colorizeText } from "../../utils/colorizeText";

export const group = (action: string, isCollapsed = false) => {
  const label = colorizeText(`[${action}]`, COLORS.magenta);

  if(isCollapsed) {
    console.groupCollapsed(label);
  } else {
    console.group(label);
  }
}

export const groupEnd = () => {
  console.groupEnd();
}

