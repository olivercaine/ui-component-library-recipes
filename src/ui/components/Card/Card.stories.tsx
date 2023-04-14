import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Card, IProps } from './Card'

export default {
  component: Card,
  title: 'Components/Card',
} as ComponentMeta<typeof Card>

const template = storyTemplate(Card)

const defaultArgs: IProps = {
  text: 'Dakzen Thai',
}

export const Default = template({ ...defaultArgs })