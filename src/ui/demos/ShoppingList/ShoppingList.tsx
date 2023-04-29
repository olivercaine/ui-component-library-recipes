import { IRecipe } from '@olivercaine/recipe-data/types'
import * as React from 'react'
import { AppHeader } from '../../templates/AppHeader/AppHeader'
import { FooterNav } from '../../templates/FooterNav/FooterNav'

export const ShoppingList: React.FC<{
  /**
  The name of the app
  */
  appName?: string
    /**
  The recipe to use
  */
  recipes: IRecipe[]
}> = ({
  appName,
  recipes
}) =>
  <>
    <AppHeader appName={appName}/>
    <ShoppingList recipes={recipes} />
    <FooterNav />
  </>
