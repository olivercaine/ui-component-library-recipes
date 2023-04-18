import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Ingredients } from '../../../index'
import { recipe } from '../../../model/examples'

export default {
  component: Ingredients,
  title: 'Components/Ingredients',
} as ComponentMeta<typeof Ingredients>

const template = storyTemplate(Ingredients)

const defaultArgs = {
  recipe
}

export const Default = template({ ...defaultArgs })
