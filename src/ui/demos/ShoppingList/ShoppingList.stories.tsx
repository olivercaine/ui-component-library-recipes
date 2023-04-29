import { recipes as recipesData } from '@olivercaine/recipe-data'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { ShoppingListDemo } from './ShoppingList'

export default {
  component: ShoppingListDemo,
  title: 'Demos/ShoppingList',
} as ComponentMeta<typeof ShoppingListDemo>

const template = storyTemplate(ShoppingListDemo)

const defaultArgs = {
  appName: 'RecipeUI',
  recipes: recipesData
}

export const Default = template({ ...defaultArgs })
