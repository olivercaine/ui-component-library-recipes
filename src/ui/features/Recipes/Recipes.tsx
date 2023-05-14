import { IRecipe } from '@olivercaine/recipe-data/types'
import React, { FC } from 'react'
import { Favourite, Stepper } from '../../../index'
import { RecipePreview } from '../../components/RecipePreview/RecipePreview'

export interface IProps {
  recipes: IRecipe[]
  /**
  An array of ids of favourite recipes
  */
  favourites?: string[]
  /**
  Actions to appear in the top right of each recipe preview component
  */
  actions?: JSX.Element
  onImageClick: (recipeId: string) => void
  onFavouriteToggle: (obj: { recipeId: string, isFavourite: boolean }) => void
  onPortionChange: (obj: { recipeId: string, portionCount: number }) => void
}

export const Recipes: FC<IProps> = ({
  recipes,
  favourites,
  onImageClick,
  onFavouriteToggle,
  onPortionChange,
}: IProps) => {
  return (<div className='container' data-testid='Recipes'>
    <div className='flex flex-wrap'>
      {recipes.map(recipe =>
        <div key={recipe.uid} className='w-full md:w-1/3 lg:w-1/4 px-4 py-4'>
          <RecipePreview
            stepperComponent={
              <Stepper
                id={recipe.uid}
                onChange={(value: number) => onPortionChange({
                  portionCount: value,
                  recipeId: recipe.uid
                })}
              />
            }
            actions={
              <Favourite
                onChangeCallback={(e) => onFavouriteToggle({
                  isFavourite: e.isFavourite,
                  recipeId: e.value.toString()
                })}
                initialValue={favourites?.includes(recipe.uid)}
                value={recipe.uid}
                css='absolute top-5 right-5'
              />
            }
            onImageClick={onImageClick}
            recipe={recipe}
          />
        </div>
      )}
    </div>
  </div>)
}
