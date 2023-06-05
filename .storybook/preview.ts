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
  screenshot: <ScreenshotOptions>{
    // delay?: number;                           // default 0 msec
    // waitAssets?: boolean;                     // default true
    // waitFor?: string | () => Promise<void>;   // default ""
    // hover?: string;                           // default ""
    // focus?: string;                           // default ""
    // click?: string;                           // default ""
    // skip?: boolean;                           // default false
    // viewport?: Viewport;
    // viewports?: string[] | { [variantName]: Viewport };
    // variants?: Variants;
    // waitImages?: boolean;                     // default true
    // clip?: { x: number; y: number; width: number; height: number } | null; // default null

    captureBeyondViewport: false, // If set true, Storycap captures screenshot beyond the viewport.
    omitBackground: true,
    fullPage: false, // If set true, Storycap captures the entire page of stories.
    // viewports: {
    //   desktop: {
    //     width: 1024,
    //     height: 768,
    //   },
    //   mobile: {
    //     width: 320,
    //     height: 568,
    //   },
    // },
    // variants: {
    //   small: {
    //     viewport: 'iPhone 5',
    //   },
    //   hovered: {
    //     extends: 'small',
    //   },
    // },
  },
}

export const decorators = [
  withScreenshot,
  withTests({
    results,
  }),
]