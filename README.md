# Boilerplate UI Component Library

[![Node.js CI](https://github.com/olivercaine/ui-component-library/actions/workflows/node.js.yml/badge.svg)](https://github.com/olivercaine/ui-component-library/actions/workflows/node.js.yml) [![Deploy Static Storybook](https://github.com/olivercaine/ui-component-library/actions/workflows/storybook.yml/badge.svg)](https://github.com/olivercaine/ui-component-library/actions/workflows/storybook.yml)[![Publish package](https://github.com/olivercaine/ui-component-library-recipes/actions/workflows/publish.js.yml/badge.svg)](https://github.com/olivercaine/ui-component-library-recipes/actions/workflows/publish.js.yml)

Recipe components built on React Storybook

[Demo](https://olivercaine.github.io/ui-component-library-recipes)

## Tools & Frameworks

1. [React Storybook](https://storybook.js.org/) for UI components

2. [TypeScript](https://www.typescriptlang.org/) for type-safety

3. [Rollup](https://rollupjs.org/) for bundling the package

4. [Husky](https://typicode.github.io/husky) for performing pre-push checks

5. [Concurrently](https://www.npmjs.com/package/concurrently) for running pre-push checks in parallel

## Features

1. Automatic lint fixes using EsLint

2. [Storybook Story snippet](.vscode/snippets.code-snippets)

3. [Story interaction test example](src/ui/basics/Button/Button.stories.tsx)

4. [@storybook/addon-links](https://www.npmjs.com/package/@storybook/addon-links) for linking from one story to another

5. Auto-deploy Storybook to GitHub pages (demo above)

## Getting started

### Run the app

Option 1: Using local environment:

```shell
nvm use # Switches to Node version defined in .nvmrc
npm ci
npm run dev
```

Option 2: Running in Docker:

```shell
npm run dev:docker
```

### View the component library

```shell
open http://127.0.0.1:6006
```

## How to use

1. Register the GitHub Package Registry in your .npmrc file ([additional docs](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)):

```
# .npmrc
@olivercaine:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<YOUR_GITHUB_TOKEN>
```

2. Install the package:

```shell
npm install @olivercaine/ui-component-library-recipes@latest
```
or

```shell
yarn install @olivercaine/ui-component-library-recipes@latest
```

*Older versions can be found in the [packages page](https://github.com/olivercaine/ui-component-library/pkgs/npm/ui-component-library-recipes).*

3. Import the package into your app:

```typescript
import { Ingredients } from '@olivercaine/ui-component-library-recipes'
import { recipes } from '@olivercaine/recipe-data'
import * as React from 'react'

export const MyComponent = () =>
  <>
    {/* Your custom code */}
   <Ingredients recipe={recipe}/>
  </>
```

4. Example recipe data can be installed from [olivercaine/recipe-data](https://github.com/olivercaine/recipe-data)

## Credits

1. https://tailblocks.cc for providing helpful pre-built components

## Troubleshooting

### Not allowed to write organization package

Error message: 

```
Permission installation not allowed to Write organization package
```

Cause: 

You may be trying to publish to an NPM repositoryw which doesn't belong to you

Solution: 

Make sure that the name in package.json starts with `@[GitHub username]/`

### Write package permission denied

Error message: 

```
Permission permission_denied: write_package
```

Cause: 

GitHub Actions does not have permission to publish the package

Solution: 

Enable [GitHub Repo] > Settings > Actions > General > "Read and write permissions"

## Todo

1. Placeholder images    
   1. Rename Placeholders.stories-disabled.tsx to enable it
   2. Fix import of placeholder images
2. Gracefully handle missing images
3. Change main logo