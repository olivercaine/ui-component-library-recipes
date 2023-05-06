import { IRecipe } from '@olivercaine/recipe-data/types'
import React from 'react'
import { RecipeDetail } from '../../features/RecipeDetail/RecipeDetail'
import { AppHeader } from '../../templates/AppHeader/AppHeader'
import { FooterNav } from '../../templates/FooterNav/FooterNav'

export const RecipeDetailPage: React.FC<{
  /**
  The name of the app
  */
  appName?: string
    /**
  The recipe to use
  */
  recipe: IRecipe
}> = ({
  appName,
  recipe
}) =>
  <>
    <AppHeader appName={appName}/>
    <RecipeDetail recipe={recipe} />
    <FooterNav/>
  </>
