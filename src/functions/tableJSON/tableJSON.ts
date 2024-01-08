import { info } from "../info/info";

export const tableJSON = (fileName: string, fileContent: string): void => {
  const jsonData = JSON.parse(fileContent);

  const fileNameLabel = `File: ${fileName}`;
  info(fileNameLabel);

  console.table(jsonData);
};
