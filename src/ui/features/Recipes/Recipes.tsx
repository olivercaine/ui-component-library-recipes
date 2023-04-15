import React, { FC } from 'react'
import { Recipe } from '../../../model/types'

export interface IProps {
  /**
  Text to be shown in the button
  */
  recipes: Recipe[]
}

export const Recipes: FC<IProps> = ({ recipes }: IProps) =>
  <>
    {recipes.map(recipe => <RecipePreview recipe={recipe} />)}
  </>
