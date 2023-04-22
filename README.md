# ui-component-library

[![Node.js CI](https://github.com/olivercaine/ui-component-library/actions/workflows/node.js.yml/badge.svg)](https://github.com/olivercaine/ui-component-library/actions/workflows/node.js.yml) [![Deploy Static Storybook](https://github.com/olivercaine/ui-component-library/actions/workflows/storybook.yml/badge.svg)](https://github.com/olivercaine/ui-component-library/actions/workflows/storybook.yml)

Pre-configured React Storybook package for rapidly developing user interfaces

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

## How to Use

1. Register the GitHub Package Registry in your .npmrc file ([additional docs](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry)):

```
# .npmrc
@olivercaine:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<YOUR_GITHUB_TOKEN>
```

2. Install the package

Add the following to your dependencies:

```
# package.json
"@olivercaine/ui-component-library-recipes": "<VERSION>",
```

VERSION can be found on the [packages page](https://github.com/olivercaine/ui-component-library/pkgs/npm/ui-component-library).

Then run 

```
npm install / yarn install
```

3. Import the package into your app:

```typescript
// CustomComponentWrapper.tsx
import { CustomComponent } from '@olivercaine/ui-component-library-recipes'
import React from 'react'

export const Button = () =>
  <>
    <CustomComponent key={1} />
  </>
```

## Troubleshooting

### Write package permission denied

Error message: `Permission permission_denied: write_package`

Cause: GitHub Actions does not have permission to publish the package

Solution: Enable [GitHub Repo] > Settings > Actions > General > "Read and write permissions"

Solution2: Make sure that the name in package.json starts with `@[GitHub username]/`