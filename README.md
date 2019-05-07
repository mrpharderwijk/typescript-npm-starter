# Typescript NPM Starter

Typescript NPM Starter is a solid foundation to create node package with Typescript and Jest for unit testing

## Installation

Open the terminal and use Git to clone the repo.

```bash
git clone git@github.com:mrpharderwijk/typescript-npm-starter.git
```

## Usage

Use the `src` directory as the source folder for the node package.

### Building package

```bash
npm run build
```

### Formatting source files

The `.prettierrc` file determines how the Typescript code should be formatted. To run prettier use the following command:

```bash
npm run format
```

### Linting source files

Lint the appliction with `tslint`. See `tslint.json` for configuration.

```bash
npm run lint
```

### Testing the package

Unit test are written with [Jest](https://jestjs.io/).

```bash
npm run test
```
