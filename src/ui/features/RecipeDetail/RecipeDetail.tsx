import React, { FC } from 'react'
import { Recipe } from '../../../model/types'
import { CookingInstructions } from '../../components/CookingInstructions/CookingInstructions'
import { Ingredients } from '../../components/Ingredients/Ingredients'
import { RecipeHero } from '../../components/RecipeHeader/RecipeHero'

export interface IProps {
  /**
  The recipe to display
  */
  recipe: Recipe
}

export const RecipeDetail: FC<IProps> = ({ recipe }: IProps) =>
  <div className='container mx-auto bg-white'>
    <div className='w-full py-4'>
      <RecipeHero recipe={recipe}/>
    </div>
    <div className='flex flex-wrap -mx-4 mt-4'>
      <div className='w-full md:w-1/3 px-4'>
        <div className='py-4'>
          <Ingredients recipe={recipe}/>
        </div>
      </div>
      <div className='w-full md:w-2/3 px-4'>
        <div className='py-4'>
          <CookingInstructions recipe={recipe} />
        </div>
      </div>
    </div>
  </div>
