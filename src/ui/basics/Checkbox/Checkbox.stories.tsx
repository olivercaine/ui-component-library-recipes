import { action } from '@storybook/addon-actions'
import { jest } from '@storybook/jest'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Checkbox } from '../../../index'

export default {
  component: Checkbox,
  title: 'Basics/Checkbox',
} as ComponentMeta<typeof Checkbox>

const template = storyTemplate(Checkbox)

const defaultArgs = {
  onChange: action('onChange'),
}

export const Default = template({ ...defaultArgs })

export const CustomText = template({ ...defaultArgs, text: 'Custom Checkbox text', onChange: jest.fn() })
