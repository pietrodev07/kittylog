# Blank

```ts
import kittylog from "kittylog";

kittylog.blank(); // blank line

kittylog.blank("dotted", "red"); // dotted red line
```

::: details Blank Parameters

:::tip PARAMETERS

```ts
interface BlankParameters {
  lineType?: LineType;
  color?: Color;
}

type LineType =
  | "default"
  | "dotted"
  | "dashed"
  | "solid"
  | "star"
  | "underscore"
  | "wave";

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
