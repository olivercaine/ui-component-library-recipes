import { ComponentStory, Story } from '@storybook/react'
import { ScreenshotOptions } from 'storycap'

export const storyTemplate = <P,>(Component: (props: P) => any) => (
  props: P
): Story<P> => {
  const template: ComponentStory<typeof Component> = (args) => Component(args)
  const story = template.bind({})
  story.args = props
  return story
}

export const storyCapVariants = {
  mobile: <ScreenshotOptions>{
    viewport: {
      width: 375,
      height: 667
    },
  },
  tablet: <ScreenshotOptions>{
    viewport: {
      width: 768,
      height: 1024
    },
  },
  desktop: <ScreenshotOptions>{
    viewport: undefined
  },
}