import { readFileSync } from "fs";
import path from "path";
import { error } from "../error/error";
import { info } from "../info/info";

type RowData = Record<string, string | number>;

export const tableCSV = (csvFilePath: string): void => {
	try {
		const absolutePath = path.resolve(csvFilePath);
		const fileContent = readFileSync(absolutePath, "utf-8");
		const rows = fileContent.split("\n").map(row => row.split(","));

		const headers = rows[0].map(header => header.trim());
		const data = parseCSVData(rows.slice(1), headers);

		const fileNameLabel = `File: ${csvFilePath}`;
		info(fileNameLabel);

		console.table(data, headers);
	} catch (err) {
		error(`An error occurred while reading the CSV file: ${err}`);
	}
};

const parseCSVData = (rows: string[][], headers: string[]): RowData[] => {
	const parsedData: RowData[] = [];
	for (const row of rows) {
		const rowData: RowData = {};
		for (const [index, cell] of row.entries()) {
			rowData[headers[index]] = Number.isNaN(Number(cell.trim())) ? cell.trim() : Number(cell.trim());
		}
		parsedData.push(rowData);
	}
	return parsedData;
};
