import { Rating } from '@mui/material'
import React, { FC } from 'react'
import { Recipe } from '../../../model/types'
import { CookingInstructions } from '../../components/CookingInstructions/CookingInstructions'
import { Ingredients } from '../../components/Ingredients/Ingredients'

export interface IProps {
  /**
  Text to be shown in the button
  */
  recipe: Recipe
}

export const RecipeDetail: FC<IProps> = ({ recipe }: IProps) =>
  <>
    <h1>{recipe.title}</h1>
    <img src={recipe.media.images?.length ? recipe.media.images[0].image : undefined} style={{ maxWidth:'100%' }}/>
    <Rating
      name='simple-controlled'
      value={recipe.rating.average}
      disabled={true}
    />
    {recipe.rating.count} reviews
    <hr/>
    {recipe.cuisine.title}
    <hr/>
    Prep time: {recipe.prep_times.for_2}mins
    <hr/>
    <Ingredients ingredients={recipe.ingredients || []}/>
    <CookingInstructions cookingInstructions={recipe.cooking_instructions || []}/>
  </>
