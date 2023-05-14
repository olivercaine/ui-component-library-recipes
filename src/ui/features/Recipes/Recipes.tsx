import { IRecipe } from '@olivercaine/recipe-data/types'
import React, { FC } from 'react'
import { Favourite, Stepper } from '../../../index'
import { RecipePreview } from '../../components/RecipePreview/RecipePreview'

export interface IProps {
  recipes: IRecipe[]
  dispatch: any,
  /**
  Actions to appear in the top right of each recipe preview component
  */
  actions?: JSX.Element
}

export const Recipes: FC<IProps> = ({
  recipes,
  dispatch,
}: IProps) => {
  const RecipePreviewActions = ({ value, favouriteCallback }: { value: string | number, favouriteCallback: any }) =>
    <Favourite onChangeCallback={favouriteCallback} value={value} css='absolute top-5 right-5' />

  return (<div className='container' data-testid='Recipes'>
    <div className='flex flex-wrap'>
      {recipes.map(recipe =>
        <div className='w-full md:w-1/3 lg:w-1/4 px-4 py-4'>
          <RecipePreview
            stepperComponent={
              <Stepper
                onChange={dispatch}
              />
            }
            actions={<RecipePreviewActions value={recipe.uid} favouriteCallback={dispatch} />}
            onImageClick={dispatch}
            recipe={recipe}
          />
        </div>
      )}
    </div>
  </div>)
}
