import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { CookingInstructions } from '../../../index'
import { recipe } from '../../../model/examples'

export default {
  component: CookingInstructions,
  title: 'Components/CookingInstructions',
} as ComponentMeta<typeof CookingInstructions>

const template = storyTemplate(CookingInstructions)

const defaultArgs = {
  recipe
}

export const Default = template({ ...defaultArgs })
