import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { exampleRecipe } from '../../../index'
import { CookingInstruction } from './CookingInstruction'

export default {
  component: CookingInstruction,
  title: 'Components/CookingInstruction',
} as ComponentMeta<typeof CookingInstruction>

const template = storyTemplate(CookingInstruction)

const defaultArgs = {
  index: 1,
  cookingInstruction: exampleRecipe?.cooking_instructions ? exampleRecipe?.cooking_instructions[0] : {}
}

export const Default = template({ ...defaultArgs })
