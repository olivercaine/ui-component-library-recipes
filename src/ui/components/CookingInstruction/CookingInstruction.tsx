import { ICookingInstructionsEntity } from '@olivercaine/recipe-data/types'
import * as React from 'react'
import { Image } from '../../../index'

export const CookingInstruction = ({
  index,
  cookingInstruction,
  // first,
  // last,
}: {
  index: number
  cookingInstruction: Partial<ICookingInstructionsEntity>
  // first: boolean
  // last: boolean
}) =>
  <>
    <div data-testid='CookingInstruction' className='text-neutral-400'>
      <div className='flex relative pt-10 sm:items-center md:w-2/3 mx-auto'>
        <div className='flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative'>
          {index + 1}
        </div>
        <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
          <div className='flex-shrink-0 w-36 inline-flex items-center justify-center'>
            <Image
              className='rounded-lg shadow-xl'
              src={cookingInstruction?.media?.images?.length ? cookingInstruction?.media?.images[0]?.image : undefined} />
          </div>
          <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
            <p className='font-medium mb-1'>{cookingInstruction?.instruction}</p>
          </div>
        </div>
      </div>
    </div>
  </>
