import { StoryTypes } from '@olliecaine/storybook-utils'
import { withTests } from '@storybook/addon-jest'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { ScreenshotOptions, withScreenshot } from 'storycap'
import results from '../.jest-test-results.json'
import '../src/ui/styles/base.css'
import '../src/ui/styles/styles.css'

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    defaultViewport: 'iphone6',
    viewports: INITIAL_VIEWPORTS
  },
  options: {
    storySort: {
      order: [
        'Demos',
        StoryTypes.Applications,
        StoryTypes.Features,
        StoryTypes.Templates,
        StoryTypes.Components,
        StoryTypes.Basics,
        StoryTypes.Principles,
        '*'
      ],
    },
  },
  screenshot: <ScreenshotOptions>{ // https://github.com/reg-viz/storycap
    skip: true, // If set true, Storycap cancels capturing corresponding stories.
    captureBeyondViewport: true, // If set true, Storycap captures screenshot beyond the viewport.
    omitBackground: true, // If set true, Storycap omits the background of the page allowing for transparent screenshots. Note the storybook theme will need to be transparent as well.
    fullPage: false, // If set true, Storycap captures the entire page of stories.
  },
}

export const decorators = [
  withScreenshot,
  withTests({
    results,
  }),
]