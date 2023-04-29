import { IRecipe } from '@olivercaine/recipe-data/types'
import * as React from 'react'
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
  recipes: IRecipe[]
}> = ({
  appName,
  recipes
}) =>
  <>
    <AppHeader appName={appName}/>
    <div className='h-screen text-neutral-400'>
      <div className='max-w-md mx-auto shadow-lg md:max-w-5xl pb-20'>
        <div className='md:flex'>
          <div className='w-full px-5'>
            <div className='md:grid md:grid-cols-1'>
              <div className='col-span-2 bg-light-grey p-6 rounded-lg'>
                <h1 className='text-xl font-medium text-neutral-300'>Shopping Cart</h1>
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
    <FooterNav />
  </>
