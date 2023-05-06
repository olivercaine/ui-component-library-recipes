import { IRecipe } from '@olivercaine/recipe-data/types'
import React from 'react'
import { ShoppingList } from '../../../index'
import { AppHeader } from '../../templates/AppHeader/AppHeader'
import { FooterNav } from '../../templates/FooterNav/FooterNav'

export const ShoppingListDemo: React.FC<{
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
    <ShoppingList onCheckboxChange={console.log} recipes={recipes} />
    <FooterNav />
  </>
