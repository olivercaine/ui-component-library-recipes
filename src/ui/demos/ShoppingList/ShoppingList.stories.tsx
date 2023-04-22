import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { recipe } from '../../../model/examples'
import { ShoppingList } from './ShoppingList'

export default {
  component: ShoppingList,
  title: 'Demos/ShoppingList',
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
} as ComponentMeta<typeof ShoppingList>

const template = storyTemplate(ShoppingList)

const defaultArgs = {
  appName: 'RecipeUI',
  recipes: [recipe, recipe]
}

export const Default = template({ ...defaultArgs })
