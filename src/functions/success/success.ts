import { COLORS } from "../../constants";
import { colorizeText } from "../../utils/colorizeText";

export const success = (message: string) => {
	const label = colorizeText("[SUCCESS]", COLORS.green);
	const messageColorized = colorizeText(message, COLORS.green);

	console.log(`${label} ${messageColorized}`);
};
