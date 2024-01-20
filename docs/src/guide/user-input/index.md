# Info

```js
import { input, info } from "kittylog";

input("Insert a number ")
  .then(input => info(`You inserted: ${input}`));
```

::: details Input Parameters

:::tip PARAMETERS

```ts
interface InputParameters {
  message: string;
}
```

:::
