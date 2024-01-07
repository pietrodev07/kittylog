 ## Issues & Pull Requests

- [Issues \& Pull Requests](#issues--pull-requests)
  - [Getting started locally](#getting-started-locally)
  - [Creating an Issue](#creating-an-issue)
  - [Working on an Issue](#working-on-an-issue)
  - [Pull requests](#pull-requests)
- [Adding a log type](#adding-a-new-log-type)

### Getting started locally

1. clone the repo with `git clone https://github.com/pietrodev07/kittylog`
2. inside the folder run `pnpm install`

### Creating an Issue

Before **creating** an Issue please follow these steps:

1. search existing Issues before creating a new issue (has someone raised this already)
2. if it doesn't exist create a new issue giving as much context as possible
3. if you wish to work on the Issue please check the relative checkbox

### Working on an Issue

Before working on an existing Issue please follow these steps:

1. comment asking for the issue to be assigned to you
2. after the Issue is assigned to you, you can start working on it
3. **only** start working on this Issue (and open a Pull Request) when it has been assigned to you.
4. when forking the issue, create a branch for your edits
5. before pushing run `pnpm biome-ci` to be sure that code formatting is correct and it will pass the PR workflow.
   1. If some errors are highlighted, you can fix them by running the following commands:
      1. `pnpm check`
      2. `pnpm lint` ( in this case, some errors may remain, so you may need to address them individually)
      3. `pnpm format`
6. reference the Issue in your Pull Request (for example `closes #123`)
7. please do **not** force push to your PR branch, this makes it very difficult to re-review - commits will be squashed when merged

### Pull requests

Remember, before opening a PR, to have an issue assigned to work on! If you have an idea but you don't find any issue for it, first open an issue and ask to have it assigned! This way you don't risk to work on something which is already being worked on or that isn't needed right now!
When the issue is assigned to you, you're welcome to start working on it, I'll be glad to merge it!

## Adding a new log type

Missing a log type? You can add it!

1. **Add new log type:**

  - Create a file `<log-type-name>.ts` for the log type inside the `src/functions/<log-type-name>` folder.
  - Open the file `index.ts` inside the `src/functions` and export your new function.

2. **Test the new log type:**

  - Run `pnpm build` in the library folder for building the new changes.
  - Run `npm link` in the library folder.
  - Create an new separately folder and then create a file `index.ts`.
  - Run `npm link kittylog` in the new folder that you created.
  - Test the new function, importing the necessary library.