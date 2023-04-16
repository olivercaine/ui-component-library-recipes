import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { CookingInstructions } from '../../../index'
import { exampleRecipe } from '../../../model/examples'
import { CookingInstructionsEntity } from '../../../model/types'

export default {
  component: CookingInstructions,
  title: 'Components/CookingInstructions',
} as ComponentMeta<typeof CookingInstructions>

const template = storyTemplate(CookingInstructions)

const defaultArgs = {
  cookingInstructions: exampleRecipe.cooking_instructions as CookingInstructionsEntity[]
}

export const Default = template({ ...defaultArgs })
