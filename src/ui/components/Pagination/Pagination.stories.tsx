import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Pagination } from './Pagination'

export default {
  component: Pagination,
  title: 'Templates/Pagination',
} as ComponentMeta<typeof Pagination>

const template = storyTemplate(Pagination)

export const Default = template({ })
