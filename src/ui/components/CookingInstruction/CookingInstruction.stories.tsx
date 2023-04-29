import { recipes } from '@olivercaine/recipe-data'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { CookingInstruction } from './CookingInstruction'

export default {
  component: CookingInstruction,
  title: 'Components/CookingInstruction',
} as ComponentMeta<typeof CookingInstruction>

const template = storyTemplate(CookingInstruction)

const defaultArgs = {
  index: 1,
  cookingInstruction: recipes[0]?.cooking_instructions ? recipes[0]?.cooking_instructions[0] : {}
}

export const Default = template({ ...defaultArgs })
