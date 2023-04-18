import * as React from 'react'
import { Recipe } from '../../../model/types'
import { FooterNav } from '../../components/FooterNav/FooterNav'
import { RecipeDetail } from '../../features/RecipeDetail/RecipeDetail'
import { AppHeader } from '../../templates/AppHeader'

export const RecipeDetailPage: React.FC<{
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
    <AppHeader appName={appName}/>
    <RecipeDetail recipe={recipe} />
    <FooterNav/>
  </>
