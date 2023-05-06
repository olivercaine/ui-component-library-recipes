# Recipe UI Components

[![Node.js CI](https://github.com/olivercaine/ui-component-library/actions/workflows/node.js.yml/badge.svg)](https://github.com/olivercaine/ui-component-library/actions/workflows/node.js.yml) [![Deploy Static Storybook](https://github.com/olivercaine/ui-component-library/actions/workflows/storybook.yml/badge.svg)](https://github.com/olivercaine/ui-component-library/actions/workflows/storybook.yml)

Recipe components built on React Storybook

[Demo](https://olivercaine.github.io/ui-component-library-recipes)

## Tools & Frameworks

1. [React Storybook](https://storybook.js.org/) for UI components

2. [TypeScript](https://www.typescriptlang.org/) for type-safety on code

3. [Rollup](https://rollupjs.org/) for bundling the package

4. [Husky](https://typicode.github.io/husky) for performing pre-push checks

5. [Concurrently](https://www.npmjs.com/package/concurrently) for running pre-push checks in parallel

## Features

1. Automatic lint fixes using EsLint

2. [Storybook Story snippet](.vscode/snippets.code-snippets)

3. [Story interaction test example](src/ui/basics/Button.stories.tsx)

4. Auto-deploy Storybook to GitHub pages
   
   1. Enable "Read and write permissions" in [GitHub Repo] > Settings > Actions > General to allow this

## How to use in an app

1. Register the GitHub Package Registry in your .npmrc file ([additional docs](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)):

```
# .npmrc
@olivercaine:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<YOUR_GITHUB_TOKEN>
```

2. Install the package:

```
npm install @olivercaine/ui-component-library-recipes@latest
```
or
```
yarn install @olivercaine/ui-component-library-recipes@latest
```

Note: to install a previous release, replace `latest` with one of the versions on the [packages page](https://github.com/users/olivercaine/packages?repo_name=ui-component-library-recipes).

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

4. Example recipe data can be installed from https://github.com/olivercaine/recipe-data

## How to run locally

1. `npm ci`
2. `npm run dev`

## Credits

1. https://tailblocks.cc for providing helpful pre-built components

## Troubleshooting

### Write package permission denied

Error message: `Permission permission_denied: write_package`

Cause: GitHub Actions does not have permission to publish the package

Solution: Make sure that the name in package.json starts with `@[GitHub username]/`

### Not allowed to write organization package

Error message: 
```
Permission installation not allowed to Write organization package
```

Cause: 

GitHub Actions does not have permission to publish the package

Solution:

1. Enable [GitHub Repo] > Settings > Actions > General > "Read and write permissions"

2. Solution2: Make sure that the name in package.json starts with `@[GitHub username]/`

## Todo

1. Placeholder images    
   1. Rename Placeholders.stories-disabled.tsx to enable it
   2. Fix import of placeholder images
2. Gracefully handle missing images
3. Change main logo