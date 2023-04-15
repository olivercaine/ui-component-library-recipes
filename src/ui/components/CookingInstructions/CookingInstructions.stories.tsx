import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { exampleRecipe } from '../../../model/examples'
import { CookingInstructionsEntity } from '../../../model/types'
import { CookingInstructions, IProps } from './CookingInstructions'

export default {
  component: CookingInstructions,
  title: 'Components/CookingInstructions',
} as ComponentMeta<typeof CookingInstructions>

const template = storyTemplate(CookingInstructions)

const defaultArgs: IProps = {
  cookingInstructions: exampleRecipe.cooking_instructions as CookingInstructionsEntity[]
}

export const Default = template({ ...defaultArgs })
