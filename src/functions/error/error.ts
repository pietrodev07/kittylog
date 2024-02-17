import { COLORS } from "../../constants";
import { colorsProvider } from "../../global";

export const error = (message: string | Error) => {
  const { colorizeText, buidlCompleteMessage } = colorsProvider;
  const label = colorizeText("[ERROR]", COLORS.red);

  if (typeof message === "string") {
    const messageColorized = colorizeText(message, COLORS.red);

    console.error(...buidlCompleteMessage([label, messageColorized]));
  } else {
    const stack = `\n${message.stack?.split("\n").slice(1).join("\n")}`;

    const messageColorized = colorizeText(message.message, COLORS.red);
    const stackColorized = colorizeText(stack, COLORS.dim);

    console.error(...buidlCompleteMessage([label, messageColorized, stackColorized]));
  }
};
