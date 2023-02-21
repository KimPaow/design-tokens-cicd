# allium-design-tokens

Design tokens for Allium

## Background

This package is connected to Figma via the [Figma Tokens](https://figmatokens.com/) plugin. The plugin allows us to export design tokens from Figma to a JSON file. This JSON file is then used to generate the design tokens for the project.

Designers can use the plugin to push changes to this repo. It's important to understand that this package acts as a version control for the Figma Tokens plugin and a central source of truth for the design system, so let's treat it as such :thumbsup:

## Build Process

The package contains several scripts:

- `transform` - This script transforms the Figma Tokens JSON file (`src/figma-tokens-output.json`) into a format that can be used by [StyleDictionary](https://amzn.github.io/style-dictionary) via the `sd` script.
- `sd` - This script uses StyleDictionary to generate the design tokens for the project. It's configured in the `src/scripts/build.js` file to determine the output format.
- `build` - This script runs the `transform` and `sd` scripts in sequence.

## CI/CD

Whenever pushes are made to the branch `tokens/figma-design-tokens` a GitHub Action will run the `build` script and create a PR to merge the updates. This PR should be reviewed by a designer **and** a frontend engineer and be merged into the `develop` branch.

## Usage

For the moment there is we're not publishing these tokens anywhere, but they can be consumed locally within the monorepo as follows:

```jsx
import lightTheme from '@caddijp/allium-design-tokens/dist/light.json'
import { ThemeProvider } from 'styled-components'

<ThemeProvider theme={lightTheme}>App code</ThemeProvider>
```
