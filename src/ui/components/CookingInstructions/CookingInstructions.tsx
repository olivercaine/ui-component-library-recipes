import * as React from 'react'
import { CookingInstruction } from '../../..'
import { Recipe } from '../../../model/types'

export const CookingInstructions = ({
  recipe
}: {
  recipe: Partial<Recipe>
}) =>
  <div className='CookingInstructions p-10' data-testid='CookingInstructions'>
    <h2 className='text-center title-font text-2xl text-neutral-300'>Cooking Instructions</h2>
    <div className='container mx-auto'>
      {recipe.cooking_instructions && recipe.cooking_instructions.map((cookingInstruction, i) =>
        <CookingInstruction index={i} cookingInstruction={cookingInstruction} />
      )}
    </div>
  </div>
