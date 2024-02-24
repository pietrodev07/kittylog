# Error

```js
import kittylog from "kittylog";

kittylog.error("Error...");
```

::: details Error Parameters

:::tip PARAMETERS

```ts
interface ErrorParameters {
  message: string | Error;
}
```

:::

::: tip Support for rest parameters

`error` support [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

```js
kittylog.error("Error", ...)
```

::: 
