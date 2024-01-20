# Table from JSON

:::code-group

```js [index.ts]
import kittylog from "kittylog";
import { readFileSync } from "fs";

const jsonContent = readFileSync("data.json", "utf-8");

kittylog.tableJSON("data.json", jsonContent);
```

```json [data.json]
[
  {
    "firstName": "Mario",
    "lastName": "Rossi",
    "age": 35,
    "city": "Rome"
  },
  {
    "firstName": "Anna",
    "lastName": "Bianchi",
    "age": 21,
    "city": "Milan"
  },
  {
    "firstName": "Luca",
    "lastName": "Verdi",
    "age": 18,
    "city": "Turin"
  },
  {
    "firstName": "Giulia",
    "lastName": "Neri",
    "age": 26,
    "city": "Naple"
  }
]
```

:::

::: details Table JSON Parameters

:::tip PARAMETERS

```ts
interface TableJsonParameters {
  fileName: string; 
  fileContent: string;
}
```

:::
