import { IRecipe } from '@olivercaine/recipe-data/types'
import React, { FC } from 'react'
import { Favourite, Stepper } from '../../../index'
import { RecipePreview } from '../../components/RecipePreview/RecipePreview'

export interface IProps {
  recipes: IRecipe[]
  /**
  Actions to appear in the top right of each recipe preview component
  */
  actions?: JSX.Element
  onImageClick: ({ recipeId }: { recipeId: string }) => void
  onFavouriteToggle: ({ recipeId, isFavourite }: { recipeId: string, isFavourite: boolean }) => void
  onPortionChange: ({ recipeId, portionCount }: { recipeId: string, portionCount: number }) => void
}

export const Recipes: FC<IProps> = ({
  recipes,
  onImageClick,
  onFavouriteToggle,
  onPortionChange,
}: IProps) => {
  const RecipePreviewActions = ({ value, onFavouriteToggle: favouriteCallback }: { value: string | number, onFavouriteToggle: any }) =>
    <Favourite onChangeCallback={favouriteCallback} value={value} css='absolute top-5 right-5' />

  return (<div className='container' data-testid='Recipes'>
    <div className='flex flex-wrap'>
      {recipes.map(recipe =>
        <div className='w-full md:w-1/3 lg:w-1/4 px-4 py-4'>
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
            actions={<RecipePreviewActions value={recipe.uid} onFavouriteToggle={onFavouriteToggle} />}
            onImageClick={onImageClick}
            recipe={recipe}
          />
        </div>
      )}
    </div>
  </div>)
}
