import { COLORS } from "../../constants";
import { Color } from "../../types";
import { colorizeText } from "../../utils/colorizeText";

export const custom = (color: Color, label: string, message: string) => {
	const labelMessage = colorizeText(`[${label}]`, COLORS[color]);
	const messageColorized = colorizeText(message, COLORS[color]);

	console.log(`${labelMessage} ${messageColorized}`);
};
