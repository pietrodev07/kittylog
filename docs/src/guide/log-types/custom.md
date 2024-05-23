# Custom

```js
import kittylog from "kittylog";

kittylog.custom("red", "CUSTOM", "Custom...");
```

::: details Custom Parameters

:::tip PARAMETERS

```ts
interface CustomParameters {
  color: Color;
  label: string;
  message: string;
}

type Color =
  | "default"
  | "underscore"
  | "bright"
  | "dim"
  | "blink"
  | "reverse"
  | "hidden"
  | "black"
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan"
  | "white";
```

:::

::: tip Support for rest parameters

`custom` support [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

```js
kittylog.custom("magenta", "CUSTOM", "Hello", ...)
```

::: 
