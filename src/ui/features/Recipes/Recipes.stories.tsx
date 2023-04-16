import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Recipes } from '../../../index'
import { exampleRecipe } from '../../../model/examples'

export default {
  component: Recipes,
  title: 'Features/Recipes',
} as ComponentMeta<typeof Recipes>

const template = storyTemplate(Recipes)

const defaultArgs = {
  recipes: [exampleRecipe, exampleRecipe, exampleRecipe]
}

export const Default = template({ ...defaultArgs })
