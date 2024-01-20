import { COLORS } from "../../constants";
import { colorizeText } from "../../utils/colorizeText";

export const error = (message: string | Error) => {
  const label = colorizeText("[ERROR]", COLORS.red);

  if (typeof message === "string") {
    const messageColorized = colorizeText(message, COLORS.red);

    console.error(`${label} ${messageColorized}`);
  } else {
    const stack = message.stack?.split("\n").slice(1).join("\n");

    const messageColorized = colorizeText(message.message, COLORS.red);
    const stackColorized = colorizeText(stack, COLORS.dim);

    console.error(`${label} ${messageColorized}\n${stackColorized}`);
  }
};
