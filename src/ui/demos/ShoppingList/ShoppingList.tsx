import * as React from 'react'
import { Recipe } from '../../../model/types'

export const ShoppingList: React.FC<{
  /**
  The name of the app
  */
  appName?: string
    /**
  The recipe to use
  */
  recipe: Recipe
}> = ({
  appName,
  recipe
}) =>
  <>
    <span>Shopping List {appName} {recipe.description}</span>
  </>
