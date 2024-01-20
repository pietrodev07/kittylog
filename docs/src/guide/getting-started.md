---
outline: deep
---

# Getting Started

## Try It Online

You can try kittylog directly in your browser on [Codesandbox](https://codesandbox.io/p/devbox/kittylog-hgqh4h).

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) version 18 or higher.
- A package manager between [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [yarn](https://yarnpkg.com/), [bun](https://bun.sh/)

You can install kittylog with:

:::code-group

```bash [npm]
npm add kittylog
```

```bash [pnpm]
pnpm add kittylog
```

```bash [yarn]
yarn add kittylog
```

``` bash [bun]
bun add kittylog
```

:::

::: details Install kittylog as dev dependency

If you want, you can install it as dev dependency with current command:

:::code-group

```bash [npm]
npm add -D kittylog 
```

```bash [pnpm]
pnpm add -D kittylog
```

```bash [yarn]
yarn add -D kittylog
```

``` bash [bun]
bun add -D kittylog
```

:::

## Basic usage

#### Use ES6 Modules

```js
import kittylog from "kittylog";

kittylog.info("Info...");
kittylog.success("Success...");
kittylog.warning("Warn...");
kittylog.error("Error...");
```

::: tip NOTE

To use ES6 modules, you have to insert the property `"type": "module"` in the `package.json`

::: details How to add it?
```json {6}
{
  "name": "kittylog",
  "version": "1.0.2",
  "description": "Pretty logs in JavaScript",
  "author": "pietrodev07",
  "type": "module",
  "scripts": {
    "build": "tsc",
  },
  "devDependencies": {
    "typescript": "^5.3.3"
  }
}
```

::: 

#### Use CommonJS Modules

```js
const kittylog = require("kittylog");

kittylog.info("Info...");
kittylog.success("Success...");
kittylog.warning("Warn...");
kittylog.error("Error...");
```

::: tip NOTE

To use ES6 modules, you have to insert the property `"type": "commonjs"` in the `package.json`
<br>
It is by default, so you don't need to add it!

::: details How to add it?
```json {6}
{
  "name": "kittylog",
  "version": "1.0.2",
  "description": "Pretty logs in JavaScript",
  "author": "pietrodev07",
  "type": "commonjs",
  "scripts": {
    "build": "tsc",
  },
  "devDependencies": {
    "typescript": "^5.3.3"
  }
}
```
::: 