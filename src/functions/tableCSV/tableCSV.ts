import { info } from "../info/info";

type RowData = Record<string, string | number>;

export const tableCSV = (fileName: string, fileContent: string) => {
  const rows = fileContent.split("\n").map(row => row.split(","));

  const headers = rows[0].map(header => header.trim());
  const data = parseCSVData(rows.slice(1), headers);

  const fileNameLabel = `File: ${fileName}`;
  info(fileNameLabel);

  console.table(data, headers);
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
