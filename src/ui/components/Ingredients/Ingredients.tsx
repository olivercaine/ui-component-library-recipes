import { IRecipe } from '@olivercaine/recipe-data/types'
import * as React from 'react'

export const Ingredients = ({
  recipe
}: {
  recipe: Partial<IRecipe>
}) =>
  <div data-testid='Ingredients' className='Ingredients text-neutral-400 pt-10'>
    <h2 className='text-center title-font text-2xl text-neutral-300'>Ingredients</h2>
    <div className='container px-5 mx-auto'>
      {recipe.ingredients && recipe.ingredients.map((ingredient) =>
        <div className='flex relative pt-10 sm:items-center md:w-2/3 mx-auto'>
          <div className='flex-grow flex sm:items-center items-start flex-col sm:flex-row'>
            <div className='flex-shrink-0 w-24 h-24 rounded-full inline-flex items-center justify-center'>
              <img className='h-auto max-w-full rounded-full shadow-xl'
                src={ingredient.media.images?.length ? ingredient?.media?.images[0]?.image : undefined}/>
            </div>
            <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
              <p className='mb-1'>{ingredient.label}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
