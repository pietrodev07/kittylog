# Performance

```js
import kittylog from "kittylog";

const performanceTest = kittylog.performance("Process name");
  // your code
performanceTest.end();
```

::: details Performance Parameters

:::tip PARAMETERS

```ts
interface PerformanceParameters {
  action: string;
}
```

:::
