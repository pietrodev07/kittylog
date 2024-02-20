# Blank

```ts
import kittylog from "kittylog";

kittylog.group("group title"); // start group 
  // your code
kittylog.groupEnd();

kittylog.groupCollapsed("group title"); // start group 
  // your code
  // the group will be collpased only in browser environment
kittylog.groupEnd();

kittylog.blank("group title", "red"); // start group with color of your choice
  // your code
kittylog.groupEnd();
```

::: details Group Parameters

:::tip PARAMETERS

```ts
interface GroupParameters {
  title: string;
  color?: Color;
}

interface GroupCollapsedParameters {
  title: string;
  color?: Color;
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
