import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { AppHeader } from './AppHeader'

export default {
  component: AppHeader,
  title: 'Templates/AppHeader',
} as ComponentMeta<typeof AppHeader>

const template = storyTemplate(AppHeader)

const defaultArgs = {
  appName: 'RecipeUI'
}

export const Default = template({ ...defaultArgs })
