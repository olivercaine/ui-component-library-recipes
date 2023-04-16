import { action } from '@storybook/addon-actions'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Stepper } from '../../../index'

export default {
  component: Stepper,
  title: 'Components/Stepper',
} as ComponentMeta<typeof Stepper>

const template = storyTemplate(Stepper)

const defaultArgs = {
  handleIncrement: action('Increment'),
  number: 5,
  handleDecrement: action('Decrement'),
}

export const Default = template({ ...defaultArgs })
