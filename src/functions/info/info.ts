import { COLORS } from "../../constants";
import { colorizeText } from "../../utils/colorizeText";

export const info = (message: string): void => {
	const label = colorizeText("[INFO]", COLORS.cyan);
	const messageColorized = colorizeText(message, COLORS.cyan);

	console.info(`${label} ${messageColorized}`);
};
