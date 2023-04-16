import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Ingredients } from '../../../index'
import { exampleRecipe } from '../../../model/examples'
import { IngredientsEntity } from '../../../model/types'

export default {
  component: Ingredients,
  title: 'Components/Ingredients',
} as ComponentMeta<typeof Ingredients>

const template = storyTemplate(Ingredients)

const defaultArgs = {
  ingredients: exampleRecipe.ingredients as IngredientsEntity[]
}

export const Default = template({ ...defaultArgs })
