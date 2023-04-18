import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { RecipeDetail } from '../../../index'
import { recipe } from '../../../model/examples'

export default {
  component: RecipeDetail,
  title: 'Features/RecipeDetail',
} as ComponentMeta<typeof RecipeDetail>

const template = storyTemplate(RecipeDetail)

const defaultArgs = {
  recipe
}

export const Default = template({ ...defaultArgs })
