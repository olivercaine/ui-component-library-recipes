import { IRecipe } from '@olivercaine/recipe-data/types'
import React, { FC } from 'react'
import { RecipePreview } from '../../components/RecipePreview/RecipePreview'

export interface IProps {
  /**
  Text to be shown in the button
  */
  recipes: IRecipe[]
  onImageClick: any,
  onStepperChange: any,
}

export const Recipes: FC<IProps> = ({ recipes, onImageClick, onStepperChange }: IProps) =>
  <div className='Recipes'>
    {recipes.map(recipe => <RecipePreview onStepperChange={onStepperChange} onImageClick={onImageClick} recipe={recipe} />)}
  </div>
