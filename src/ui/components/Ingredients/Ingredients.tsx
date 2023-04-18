import * as React from 'react'
import { Recipe } from '../../../model/types'

export const Ingredients = ({
  recipe
}: {
  recipe: Partial<Recipe>
}) =>
  <div className='Ingredients'>
    <h2 className='text-center text-2xl'>Ingredients</h2>
    <section className='text-gray-600 body-font'>
      <div className='container px-5 mx-auto flex flex-wrap'>
        {recipe.ingredients && recipe.ingredients.map((ingredient) =>
          <div className='flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto'>
            <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div className='flex-shrink-0 w-24 h-24 text-indigo-500 rounded-full inline-flex items-center justify-center'>
                <img className='h-auto max-w-full rounded-full'
                  src={ingredient.media.images?.length ? ingredient?.media?.images[0]?.image : undefined}/>
              </div>
              <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>{ingredient.label}</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  </div>
