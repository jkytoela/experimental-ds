# Experimental DS

  > For learning more about design systems/component libraries, monorepos, lerna, etc.
 
 
[![Netlify Status](https://api.netlify.com/api/v1/badges/a3aae5ec-bc48-4e5b-9c77-21ea3651daeb/deploy-status)](https://app.netlify.com/sites/experimental-ds/deploys)


## Main technologies
- TypeScript, React.js
- Lerna, Yarn
- Styled components
- Polished.js

## Roadmap

- [Core components](https://designsystemchecklist.com/category/core-components/)
- Design Tokens
- Tooling


## Current components

- Theming (ExperimentalProvider)
- Button

## Development

This project uses Lerna and Yarn for a [monorepo](https://en.wikipedia.org/wiki/Monorepo) structure (one repo containing many, often connected modules). 

  
### Installation

1. Install dependencies in the root of the repo: `yarn`

2. Run Typescript to build on each file save: `yarn dev`

3. Run Storybook: `yarn storybook`

### Project Structure

-  **core** - This is used by all components to provide common shared dependencies like React and Styled Components.

-  **components** - This package exports all the individual component from one place.


### Creating New Packages

  

**Use Lerna CLI to create package:**

  

1.  `lerna create package-name`

2. When asked for a package name, provide one prefixed with `experimental-ds-` (e.g. `experimental-ds-button`).

3. Set version to `0.0.0`. Lerna will should increment the versioning automatically.

4. Add a short description

5. Keywords are optional

6. Skip past "homepage" (press enter)

7. Set License to MIT

8. Entry point should be set to `lib/index.js`

9. Skip past "Repository" (press enter)

  
**Add necessary files:**

  

1. Create a `tsconfig.json` inside the new package folder:
```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./lib"
  },
  "include": ["./src"]
}
```

2. Add the typings file and build scripts to the `package.json`:
```json
{
  "typings": "lib/index.d.ts",
  "scripts": {
    "build": "tsc -d",
    "dev": "tsc --watch"
  }
}
```

**Install shared modules**:

Use the Lerna CLI to link the local packages properly. For example, if you wanted to need the `core` package (which you almost always do), inside the `button` package, it'd look like this:

```bash
lerna add experimental-ds-core --scope=experimental-ds-button

```
>  **New Components**: Make sure to install `core` to get access to React, Styled Components, and other dependencies.


## Building Packages / Modules

You can build separate packages by navigating to the package and running the build command locally there. For example:

1. From the monorepo root: `cd packages/button`

2.  `yarn build`

This will run the build process locally, and give you better, syntax highlighted, error messaging.

## Building Storybook

For building static files of storybook (for netlify for example), run:

`yarn build && yarn build-storybook`

Static build of storybook will be created to `/storybook-static`

## Links

- [styled-components](https://styled-components.com/)
- [design-systems-monorepo](https://github.com/whoisryosuke/design-systems-monorepo)
- [Storybook](https://storybook.js.org/)
- [Commitizen](https://github.com/commitizen/cz-cli)
