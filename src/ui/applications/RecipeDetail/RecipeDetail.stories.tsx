import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { IProps, RecipeDetailPage } from './RecipeDetail'

export default {
  component: RecipeDetailPage,
  title: 'Applications/RecipeDetail',
} as ComponentMeta<typeof RecipeDetailPage>

const template = storyTemplate(RecipeDetailPage)

const defaultArgs: IProps = {
  appName: 'My recipe app'
}

export const Default = template({ ...defaultArgs })
