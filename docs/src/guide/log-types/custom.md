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
