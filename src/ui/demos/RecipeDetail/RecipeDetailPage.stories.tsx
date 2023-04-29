import { recipes } from '@olivercaine/recipe-data'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { RecipeDetailPage } from './RecipeDetailPage'

export default {
  component: RecipeDetailPage,
  title: 'Demos/RecipeDetailPage',
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
} as ComponentMeta<typeof RecipeDetailPage>

const template = storyTemplate(RecipeDetailPage)

const defaultArgs = {
  appName: 'RecipeUI',
  recipe: recipes[0]
}

export const Default = template({ ...defaultArgs })
