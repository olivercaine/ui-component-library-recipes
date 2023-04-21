import * as React from 'react'
import { CookingInstructionsEntity } from '../../../model/types'

export const CookingInstruction = ({
  index,
  cookingInstruction,
  // first,
  // last,
}: {
  index: number
  cookingInstruction: Partial<CookingInstructionsEntity>
  // first: boolean
  // last: boolean
}) =>
  <div data-testid='CookingInstruction' className='text-neutral-400'>
    <div className='flex relative pt-10 sm:items-center md:w-2/3 mx-auto'>
      {/* <div className='h-full w-10 absolute inset-0 flex items-center justify-center'>
        <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
      </div> */}
      <div className='flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative'>
        {index + 1}
      </div>
      <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
        <div className='flex-shrink-0 w-24 h-24 inline-flex items-center justify-center'>
          <img
            className='rounded-lg shadow-xl'
            src={cookingInstruction?.media?.images?.length ? cookingInstruction?.media?.images[0]?.image : undefined} />
        </div>
        <div className='flex-grow sm:pl-6 mt-6 sm:mt-0'>
          <p className='font-medium mb-1'>{cookingInstruction?.instruction}</p>
        </div>
      </div>
    </div>
  </div>
