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
  <div className='grid grid-cols-3 gap-8 py-10 px-16 pb-20'>
    <div className='col-span-3'>
      <RecipeHero recipe={recipe}/>
    </div>
    {/* <div className='rounded-lg'>
      <h2>Recipe info</h2>
      <ul>
        <li>Prep time 20 mins</li>
      </ul>
    </div> */}
    <div className='bg-light-grey self-start rounded-lg shadow-xl'>
      <Ingredients recipe={recipe}/>
    </div>
    <div className='col-span-2 bg-light-grey rounded-lg shadow-xl'>
      <CookingInstructions recipe={recipe} />
    </div>
  </div>
