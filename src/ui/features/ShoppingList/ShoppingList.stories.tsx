import { recipes } from '@olivercaine/recipe-data'
import { action } from '@storybook/addon-actions'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { ShoppingList } from '../../../index'

export default {
  component: ShoppingList,
  title: 'Features/ShoppingList',
} as ComponentMeta<typeof ShoppingList>

const template = storyTemplate(ShoppingList)

const defaultArgs = {
  appName: 'RecipeUI',
  recipes,
  onCheckboxChange: action('onChange'),
}

export const Default = template({ ...defaultArgs })

export const WithPortionCount = template({
  ...defaultArgs,
  portions: {
    [recipes[1].uid]: 8
  }
})

export const NoRecipes = template({
  ...defaultArgs,
  recipes: []
})
