import { IRecipe } from '@olivercaine/recipe-data/types'
import React from 'react'
import { Image, Rating } from '../../../index'
import { testIds } from './RecipePreview.selectors'

export const RecipePreview = ({
  recipe,
  onImageClick,
  actions,
  stepperComponent
}: {
  recipe: Partial<IRecipe>,
  onImageClick: UIEvent | any,
  actions?: JSX.Element | JSX.Element[]
  stepperComponent?: React.ReactNode
}) => {
  const dti = testIds({
    uniqueId: recipe.uid
  })

  return (
    <div className='bg-light-grey rounded-lg relative' data-testid={dti.wrapper}>
      {actions}
      <Image
        data-testId={dti.image}
        alt='blog'
        className='lg:h-48 w-full object-cover object-center'
        onClick={() => onImageClick(recipe.uid)}
        src={recipe?.media?.images?.length ? recipe?.media?.images[0]?.image : undefined}
      />
      <div className='p-6'>
        <h1 className='title-font text-lg font-medium mb-3 text-neutral-300'>{recipe.title}</h1>
        <div className='flex items-center flex-wrap justify-between'>
          {recipe?.rating &&
            <Rating key={recipe.uid} />
          }
          {stepperComponent &&
            <div className={'self-right'}>
              {stepperComponent}
            </div>
          }
          {/* <span className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto
          leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
          <svg className='w-4 h-4 mr-1' stroke='currentColor' strokeWidth='2' fill='none' strokeLinecap='round'
            strokeLinejoin='round' viewBox='0 0 24 24'>
            <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
            <circle cx='12' cy='12' r='3'></circle>
          </svg>1.2K
        </span> */}
          {/* <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
          <svg className='w-4 h-4 mr-1' stroke='currentColor' strokeWidth='2' fill='none' strokeLinecap='round'
            strokeLinejoin='round' viewBox='0 0 24 24'>
            <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5
              8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
          </svg>6
        </span> */}
        </div>
      </div>
    </div>
  )
}
