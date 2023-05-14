import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Rating } from '../../../index'

export default {
  component: Rating,
  title: 'Components/Rating',
} as ComponentMeta<typeof Rating>

const template = storyTemplate(Rating)

const defaultArgs = {}

export const Default = template({ ...defaultArgs })
