import { COLORS, LINE_TYPES } from "../../constants";
import { Color, LineType } from "../../types";
import { colorizeText } from "../../utils/colorizeText";

export const blank = (lineType?: LineType, color?: Color) => {
	const selectedLine = lineType in LINE_TYPES ? LINE_TYPES[lineType] : LINE_TYPES.default;
	const selectedColor = color in COLORS ? COLORS[color] : COLORS.default;

	console.log(colorizeText(selectedLine.repeat(40), selectedColor));
};
