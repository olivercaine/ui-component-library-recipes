import { recipes } from '@olivercaine/recipe-data'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Ingredients } from '../../../index'

export default {
  component: Ingredients,
  title: 'Components/Ingredients',
} as ComponentMeta<typeof Ingredients>

const template = storyTemplate(Ingredients)

const defaultArgs = {
  recipe: recipes[0]
}

export const Default = template({ ...defaultArgs })
