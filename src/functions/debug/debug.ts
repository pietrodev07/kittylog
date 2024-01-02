import { COLORS } from "../../constants";
import { colorizeText } from "../../utils/colorizeText";

export const debug = (message: string, data: unknown) => {
	const timestamp = new Date().toLocaleTimeString();

	const label = colorizeText("[DEBUG]", COLORS.yellow);
	const timestampLabel = colorizeText(timestamp, COLORS.magenta);

	console.log(`${label} - ${timestampLabel}`);
	console.log(`${message}:`, data);
};
