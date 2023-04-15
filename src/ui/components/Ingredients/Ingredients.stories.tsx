import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { exampleRecipe } from '../../../model/examples'
import { IngredientsEntity } from '../../../model/types'
import { Ingredients, IProps } from './Ingredients'

export default {
  component: Ingredients,
  title: 'Components/Ingredients',
} as ComponentMeta<typeof Ingredients>

const template = storyTemplate(Ingredients)

const defaultArgs: IProps = {
  ingredients: exampleRecipe.ingredients as IngredientsEntity[]
}

export const Default = template({ ...defaultArgs })
