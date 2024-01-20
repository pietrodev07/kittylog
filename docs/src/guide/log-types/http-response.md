# HTTP Response

```js
import kittylog from "kittylog";

fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => kittylog.httpResponse(res));
```

::: details HTTP Response Parameters

:::tip PARAMETERS

```ts
interface HttpResponseParameters {
  response: Response;
}
```

:::
