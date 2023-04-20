import * as React from 'react'
import { CookingInstruction } from '../../..'
import { Recipe } from '../../../model/types'

export const CookingInstructions = ({
  recipe
}: {
  recipe: Partial<Recipe>
}) =>
  <div className='CookingInstructions'>
    <h2 className='text-center text-2xl'>Cooking Instructions</h2>
    <section className='text-gray-600 body-font'>
      <div className='container px-5 mx-auto flex flex-wrap'>
        {recipe.cooking_instructions && recipe.cooking_instructions.map((cookingInstruction, i) =>
          <>
            <CookingInstruction index={i} cookingInstruction={cookingInstruction} />
          </>
        )}
      </div>
    </section>
  </div>
