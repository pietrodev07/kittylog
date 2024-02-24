# Group

```ts
import kittylog from "kittylog";

const group = kittylog.group("group title"); // start group 
  // your code
group.end();

const secondGroup = kittylog.group("group title", "red"); // start group with color of your choice
  // your code
secondGroup.end();

const thirdGroup = kittylog.group("group title", "red", "COLLAPSED"); // start group with color and show it collapsed 
  // your code
  // the group will be collpased only in browser environment
thirdGroup.end();
```

::: details Group Parameters

:::tip PARAMETERS

```ts
interface GroupParameters {
  title: string;
  color?: Color;
  type?: GroupType
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

type GroupType = 
  | "NORMAL"
  | "COLLAPSED"
```
 
:::
