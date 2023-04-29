import { recipes } from '@olivercaine/recipe-data'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { RecipeDetail } from '../../../index'

export default {
  component: RecipeDetail,
  title: 'Features/RecipeDetail',
} as ComponentMeta<typeof RecipeDetail>

const template = storyTemplate(RecipeDetail)

const defaultArgs = {
  recipe: recipes[0]
}

export const Default = template({ ...defaultArgs })
