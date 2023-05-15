import { IRecipe } from '@olivercaine/recipe-data/types'
import React from 'react'
import { Image } from '../../../index'
import { Checkbox } from '../../basics/Checkbox/Checkbox'
import { testIds } from './ShoppingList.selectors'

export const ShoppingList: React.FC<{
  appName?: string
  /**
The recipe to use
*/
  recipes: IRecipe[],
  onCheckboxChange: any
}> = ({
  recipes,
  onCheckboxChange
}) =>
  (<div className='h-screen text-neutral-400' data-testid={testIds({}).wrapper}>
    <div className='max-w-md mx-auto shadow-lg md:max-w-5xl pb-20'>
      <div className='md:flex'>
        <div className='w-full px-5'>
          <div className='md:grid md:grid-cols-1'>
            <div className='col-span-2 bg-light-grey p-6 rounded-lg'>
              <h1 className='text-xl font-medium text-neutral-300'>Shopping List</h1>
              {recipes.map((recipe) =>
                recipe.ingredients?.map((ingredient) =>
                  <div className='flex justify-between items-center pt-6' key={ingredient.uid}>
                    <div className='flex items-center'>
                      <Image
                        className='rounded-full'
                        data-testId={testIds({ uniqueImageId: ingredient.uid }).image}
                        src={ingredient.media.images?.length ? ingredient?.media?.images[0]?.image : undefined}
                        width='60'
                      />
                      <div className='flex flex-col ml-3'>
                        <span className='md:text-md font-medium'>{ingredient.name}</span>
                      </div>
                    </div>
                    <div className='flex justify-center items-center'>
                      <Checkbox value={ingredient.uid} onChangeCallback={onCheckboxChange} />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>)
