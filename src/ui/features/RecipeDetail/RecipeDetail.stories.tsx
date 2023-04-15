import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { exampleRecipe } from '../../../model/examples'
import { IProps, RecipeDetail } from './RecipeDetail'

export default {
  component: RecipeDetail,
  title: 'Features/RecipeDetail',
} as ComponentMeta<typeof RecipeDetail>

const template = storyTemplate(RecipeDetail)

const defaultArgs: IProps = {
  recipe: exampleRecipe
}

export const Default = template({ ...defaultArgs })
