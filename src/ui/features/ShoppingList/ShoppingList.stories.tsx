import { recipes } from '@olivercaine/recipe-data'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { ShoppingList } from './ShoppingList'

export default {
  component: ShoppingList,
  title: 'Features/ShoppingList',
} as ComponentMeta<typeof ShoppingList>

const template = storyTemplate(ShoppingList)

const defaultArgs = {
  appName: 'RecipeUI',
  recipes
}

export const Default = template({ ...defaultArgs })
