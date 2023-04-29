import { action } from '@storybook/addon-actions'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { FooterNav } from '../../../index'

export default {
  component: FooterNav,
  title: 'Templates/FooterNav',
} as ComponentMeta<typeof FooterNav>

const template = storyTemplate(FooterNav)

const defaultArgs = {
  handleIncrement: action('Increment'),
  number: 5,
  handleDecrement: action('Decrement'),
}

export const Default = template({ ...defaultArgs })
