# Table

```js
import kittylog from "kittylog";

const data =  {
  firstName: "Mario",
  lastaName: "Rossi",
  age: 35,
  city: "Rome"
};

kittylog.table(data);
```

::: details Table Parameters

:::tip PARAMETERS

```ts
interface TableParameters {
  data: Row[]
}

interface Row {
  [key: string]: string | number;
}
```

:::
