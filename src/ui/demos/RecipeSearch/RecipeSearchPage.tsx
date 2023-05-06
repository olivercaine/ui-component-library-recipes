import { IRecipe } from '@olivercaine/recipe-data/types'
import React from 'react'
import { AppHeader, FooterNav, Pagination, Recipes } from '../../../index'

export const RecipeSearchPage = ({
  appName,
  onImageClick,
  onStepperChange,
  recipes,
}: {
  /**
  The name of the app
  */
  appName?: string
  onImageClick: any,
  onStepperChange: any,
  recipes: IRecipe[]
}) =>
  <>
    <AppHeader appName={appName}/>
    <Recipes onImageClick={console.log} recipes={recipes}/>
    <Pagination/>
    <FooterNav/>
  </>
