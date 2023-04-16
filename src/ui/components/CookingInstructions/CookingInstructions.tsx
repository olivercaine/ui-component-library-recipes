import * as React from 'react'
import { CookingInstructionsEntity } from '../../../model/types'

export interface IProps {
  cookingInstructions: CookingInstructionsEntity[]
}

/**
 * Based on MUI: {@link https://mui.com/material-ui/react-list/}
 */
export const CookingInstructions = ({
  cookingInstructions: ingredients
}: IProps) =>
  <div className='CookingInstructions'>
    <h2 className='text-gray-900 text-3xl title-font font-medium mb-1'>
      Cooking Instructions
    </h2>
    <section className='text-gray-600 body-font'>
      <div className='container px-5 py-24 mx-auto flex flex-wrap'>
        {ingredients.map((cookingInstruction, i) =>
          <div className='flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto'>
            <div className='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div className='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div className='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm'>
              {i + 1}
            </div>
            <div className='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div className='flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center'>
                <img style={{ }} src={cookingInstruction?.media?.images?.length ? cookingInstruction?.media?.images[0]?.image : undefined} />
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

// <section className='text-gray-600 body-font overflow-hidden'>
//   {ingredients.map((cookingInstruction, i) =>
//     <div className='container px-5 py-24 mx-auto'>
//       <div className='-my-8 divide-y-2 divide-gray-100'>
//         <div className='py-8 flex flex-wrap md:flex-nowrap'>
//           <div className='md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col'>
//             <img style={{ maxWidth:'33%' }} src={cookingInstruction?.media?.images?.length ? cookingInstruction?.media?.images[0]?.image : undefined} />
//           </div>
//           <div className='md:flex-grow'>
//             <p className='leading-relaxed'>{i + 1}. {cookingInstruction.instruction}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )}
// </section>
