import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Recipes } from '../../../index'
import { recipe } from '../../../model/examples'

export default {
  component: Recipes,
  title: 'Features/Recipes',
} as ComponentMeta<typeof Recipes>

const template = storyTemplate(Recipes)

const defaultArgs = {
  recipes: [recipe, recipe, recipe]
}

export const Default = template({ ...defaultArgs })
