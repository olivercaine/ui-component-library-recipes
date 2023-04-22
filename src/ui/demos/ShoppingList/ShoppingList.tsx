import * as React from 'react'
import { Recipe } from '../../../model/types'
import { Checkbox } from '../../basics/Checkbox/Checkbox'
import { FooterNav } from '../../components/FooterNav/FooterNav'
import { AppHeader } from '../../templates/AppHeader'

export const ShoppingList: React.FC<{
  /**
  The name of the app
  */
  appName?: string
    /**
  The recipe to use
  */
  recipes: Recipe[]
}> = ({
  appName,
  recipes
}) =>
  <>
    <AppHeader appName={appName}/>
    <div className='h-screen text-neutral-400'>
      <div className='py-12'>
        <div className='max-w-md mx-auto shadow-lg rounded-lg  md:max-w-5xl'>
          <div className='md:flex '>
            <div className='w-full px-5'>
              <div className='md:grid md:grid-cols-1'>
                <div className='col-span-2 bg-light-grey p-6'>
                  <h1 className='text-xl font-medium '>Shopping Cart</h1>
                  {recipes.map((recipe) =>
                    recipe.ingredients?.map((ingredient) =>

                      <div className='flex justify-between items-center pt-6'>
                        <div className='flex  items-center'>
                          <img src={ingredient.media.images?.length ? ingredient?.media?.images[0]?.image : undefined}
                            width='60'
                            className='rounded-full'
                          />
                          <div className='flex flex-col ml-3'>
                            <span className='md:text-md font-medium'>{ingredient.name}</span>
                          </div>
                        </div>
                        <div className='flex justify-center items-center'>
                          <Checkbox/>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterNav/>
  </>
