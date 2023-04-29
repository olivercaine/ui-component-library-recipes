import { recipes } from '@olivercaine/recipe-data'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { CookingInstructions } from '../../../index'

export default {
  component: CookingInstructions,
  title: 'Components/CookingInstructions',
} as ComponentMeta<typeof CookingInstructions>

const template = storyTemplate(CookingInstructions)

const defaultArgs = {
  recipe: recipes[0]
}

export const Default = template({ ...defaultArgs })
