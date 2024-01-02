import { COLORS } from "../../constants";
import { colorizeText } from "../../utils/colorizeText";

export const error = (message: string): void => {
	const label = colorizeText("[ERROR]", COLORS.red);
	const messageColorized = colorizeText(message, COLORS.red);

	console.error(`${label} ${messageColorized}`);
};
