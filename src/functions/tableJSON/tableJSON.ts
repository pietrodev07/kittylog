import { readFileSync } from "fs";
import path from "path";
import { error } from "../error/error";
import { info } from "../info/info";

export const tableJSON = (jsonFilePath: string): void => {
	try {
		const absolutePath = path.resolve(jsonFilePath);
		const jsonContent = readFileSync(absolutePath, "utf-8");
		const jsonData = JSON.parse(jsonContent);

		const fileNameLabel = `File: ${jsonFilePath}`;
		info(fileNameLabel);

		console.table(jsonData);
	} catch (err) {
		error(`An error occurred while reading the JSON file: ${err}`);
	}
};
