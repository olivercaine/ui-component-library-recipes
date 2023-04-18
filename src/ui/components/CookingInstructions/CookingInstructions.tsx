import * as React from 'react'
import { Recipe } from '../../../model/types'

export const CookingInstructions = ({
  recipe
}: {
  recipe: Partial<Recipe>
}) =>
  <div className='CookingInstructions'>
    <h2 className='text-center text-2xl'>Cooking Instructions</h2>
    <section className='text-gray-600 body-font'>
      <div className='container px-5 mx-auto flex flex-wrap'>
        {recipe.cooking_instructions && recipe.cooking_instructions.map((cookingInstruction, i) =>
          <div className='flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto'>
            <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 pointer-events-none'></div>
            </div>
            <div className='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center
            justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm'>
              {i + 1}
            </div>
            <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div className='flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500
              rounded-full inline-flex items-center justify-center'>
                <img
                  className='rounded-full'
                  src={cookingInstruction?.media?.images?.length ? cookingInstruction?.media?.images[0]?.image : undefined} />
              </div>
              <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <h2 className='font-medium title-font text-gray-900 mb-1 text-xl'>{cookingInstruction.instruction}</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  </div>
