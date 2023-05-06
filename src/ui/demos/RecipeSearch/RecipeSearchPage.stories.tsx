import { recipes } from '@olivercaine/recipe-data'
import { action } from '@storybook/addon-actions'
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
  onImageClick: linkTo('Demos/RecipeDetailPage'),
  onStepperChange: action,
  recipes: [recipes[0], recipes[0], recipes[0], recipes[0], recipes[0], recipes[0]]
}

export const Default = template({ ...defaultArgs })
