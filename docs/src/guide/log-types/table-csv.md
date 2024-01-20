# Table from CSV

:::code-group

```js [index.ts]
import kittylog from "kittylog";
import { readFileSync } from "fs";

const csvContent = readFileSync("data.csv", "utf-8");

kittylog.tableCSV("data.csv", csvContent);
```

```csv [data.csv]
firstName,lastName,age,city
Mario,Rossi,35,Rome
Anna,Bianchi,21,Milan
Luca,Verdi,18,Turin
Giulia,Neri,26,Naple
```

:::

::: details Table CSV Parameters

:::tip PARAMETERS

```ts
interface TableCsvParameters {
  fileName: string; 
  fileContent: string;
}
```

:::
