import { StorybookConfig } from '@storybook/core-common'

const config: StorybookConfig = {
  core: {
    builder: 'webpack5'
  },
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-jest',
    '@storybook/addon-links',
    '@storybook/addon-postcss',
  ],
  features: {
    interactionsDebugger: true, // Enable playback controls
    // storyStoreV7: true, // https://storybook.js.org/docs/react/configure/webpack#bundle-splitting
  },
  typescript: {
    // @ts-expect-error
    reactDocgen: 'react-docgen-typescript-plugin'
  },
  docs: {
    autodocs: true
  }
}

module.exports = config
