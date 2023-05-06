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
  <div className='container' data-testid='Recipes'>
    <div className='flex flex-wrap'>
      {recipes.map(recipe =>
        <div className='w-full md:w-1/3 lg:w-1/4'>
          <RecipePreview stepperComponent={<Stepper />} onImageClick={onImageClick} recipe={recipe} />
        </div>
      )}
    </div>
  </div>
