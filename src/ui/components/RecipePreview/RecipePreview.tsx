import { EzCard } from '@ezcater/recipe'
import { Rating } from '@mui/material'
import React, { FC } from 'react'
import { Recipe } from '../../../model/types'

export interface IProps {
  /**
  The recipe to be displayed
  */
  recipe: Recipe
}

export const RecipePreview: FC<IProps> = ({ recipe }: IProps) =>
  <EzCard
    title={recipe.title}
    subtitle={`Prep time: ${recipe.prep_times.for_2}mins`}
    imageSrc={recipe.media.images?.length ? recipe.media.images[0].image : undefined}
    imageMaxHeight={120}
    size='small'
  >
    <p>
      <Rating 
        name="simple-controlled"
        value={recipe.rating.average}
        disabled={true}
      />
      {recipe.rating.average} ({recipe.rating.count} reviews)
    </p>
  </EzCard>
