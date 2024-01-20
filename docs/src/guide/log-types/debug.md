# Debug

```js
import kittylog from "kittylog";

const user = {
  username: "pietrodev07",
  email: "hello@gmail.com",
  password: "hello"
}

kittylog.debug("User data", user);
```

::: details Debug Parameters

:::tip PARAMETERS

```ts
interface DebugParameters {
  message: string;
  data: unknown;
}
```

:::
