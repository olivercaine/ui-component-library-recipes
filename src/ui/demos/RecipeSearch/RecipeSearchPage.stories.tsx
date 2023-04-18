import { linkTo } from '@storybook/addon-links'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { RecipeSearchPage } from './RecipeSearchPage'

export default {
  component: RecipeSearchPage,
  title: 'Demos/RecipeSearchPage',
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
} as ComponentMeta<typeof RecipeSearchPage>

const template = storyTemplate(RecipeSearchPage)

const defaultArgs = {
  onImageClick: linkTo('Demos/RecipeDetailPage')
}

export const Default = template({ ...defaultArgs })
