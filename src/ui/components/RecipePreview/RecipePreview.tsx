import React from 'react'
import { Favourite, Stepper } from '../../..'
import { Recipe } from '../../../model/types'

export const RecipePreview = ({
  recipe,
  onImageClick
}: {
  recipe: Partial<Recipe>,
  onImageClick: any,
}) =>
  <div className='p-4 md:w-1/4 drop-shadow-xl text-neutral-400' data-testid='RecipePreview'>
    <div className='h-full bg-light-grey border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
      <Favourite className='absolute top-5 right-5'/>
      <img className='lg:h-48 md:h-36 w-full object-cover object-center'
        src={recipe?.media?.images?.length ? recipe.media.images[0].image : undefined} alt='blog'/>
      <div className='p-6'>
        <h1 className='title-font text-lg font-medium mb-3 text-neutral-300'>{recipe.title}</h1>
        <div className='flex items-center flex-wrap '>
          <a className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>
            <Stepper onChange={console.log} />
          </a>
          <span className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto
          leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
            <svg className='w-4 h-4 mr-1' stroke='currentColor' stroke-width='2' fill='none' stroke-linecap='round'
              stroke-linejoin='round' viewBox='0 0 24 24'>
              <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
              <circle cx='12' cy='12' r='3'></circle>
            </svg>1.2K
          </span>
          <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
            <svg className='w-4 h-4 mr-1' stroke='currentColor' stroke-width='2' fill='none' stroke-linecap='round'
              stroke-linejoin='round' viewBox='0 0 24 24'>
              <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5
              8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
            </svg>6
          </span>
        </div>
      </div>
    </div>
  </div>
