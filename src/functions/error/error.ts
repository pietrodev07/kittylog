import { COLORS } from "../../constants";
import { colorsProvider } from "../../global";

export const error = (...message: string[] | Error[]) => {
  const { colorizeText, buildCompleteMessage } = colorsProvider;
  const label = colorizeText("[ERROR]", COLORS.red);

  if (message[0] instanceof Error) {
    if (message.length > 1) throw new Error("Too many arguments for error function");

    const error = message[0];

    const stack = `\n${error.stack?.split("\n").slice(1).join("\n")}`;

    const messageColorized = colorizeText(error.message, COLORS.red);
    const stackColorized = colorizeText(stack, COLORS.dim);

    console.error(...buildCompleteMessage([label, messageColorized, stackColorized]));
  } else {
    const messageColorized = colorizeText(message.join(" "), COLORS.red);

    console.error(...buildCompleteMessage([label, messageColorized]));
  }
};
