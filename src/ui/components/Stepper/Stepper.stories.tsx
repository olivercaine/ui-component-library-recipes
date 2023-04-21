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
  onChange: action('On Change'),
}

export const Default = template({ ...defaultArgs })
