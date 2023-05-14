import { IRecipe } from '@olivercaine/recipe-data/types'
import React from 'react'
import { CookingInstruction } from '../../..'

export const CookingInstructions = ({
  recipe
}: {
  recipe: Partial<IRecipe>
}) =>
  <div className='p-10' data-testid='CookingInstructions'>
    <h2 className='text-center title-font text-2xl text-neutral-300'>Cooking Instructions</h2>
    <div className='container mx-auto'>
      {recipe.cooking_instructions && recipe.cooking_instructions.map((cookingInstruction, i) =>
        <CookingInstruction key={i} index={i} cookingInstruction={cookingInstruction} />
      )}
    </div>
  </div>
