import { Stepper } from '@mui/material'
import { IRecipe } from '@olivercaine/recipe-data/types'
import React, { FC } from 'react'
import { RecipePreview } from '../../components/RecipePreview/RecipePreview'

export interface IProps {
  /**
  Text to be shown in the button
  */
  recipes: IRecipe[]
  onImageClick: any,
}

export const Recipes: FC<IProps> = ({ recipes, onImageClick }: IProps) =>
  <div className='Recipes'>
    {recipes.map(recipe => <RecipePreview stepperComponent={<Stepper />} onImageClick={onImageClick} recipe={recipe} />)}
  </div>
