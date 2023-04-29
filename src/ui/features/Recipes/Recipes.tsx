import { IRecipe } from '@olivercaine/recipe-data/types'
import React, { FC } from 'react'
import { RecipePreview } from '../../components/RecipePreview/RecipePreview'

export interface IProps {
  /**
  Text to be shown in the button
  */
  recipes: IRecipe[]
}

export const Recipes: FC<IProps> = ({ recipes }: IProps) =>
  <div className='Recipes'>
    {recipes.map(recipe => <RecipePreview onImageClick={console.log} recipe={recipe} />)}
  </div>
