import { Rating } from '@mui/material'
import Typography from '@mui/material/Typography'
import React, { FC } from 'react'
import { Recipe } from '../../../model/types'

export const RecipeHero: FC<{
  /**
  The recipe to show
  */
  recipe: Partial<Recipe>
}> = ({
  recipe
}) =>
  <section className='body-font'>
    <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
      <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
        <img className='object-cover object-center rounded'
          alt='hero'
          // eslint-disable-next-line max-len
          src='https://raw.githubusercontent.com/olivercaine/ui-component-library-recipes/main/src/images/eggs-benedict/dalle-2023-04-15-122313-close-up-of-eggs-benedict-on-a-blue-plate-in-a-sunny-kitchen.png'/>
      </div>
      <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
          {recipe?.title}
        </h1>
        <p className='mb-8 leading-relaxed'>{recipe?.description}</p>
        <div className='flex justify-center'>
          {recipe && recipe.prep_times &&
            <span>{recipe.prep_times.for_2} minutes</span>
          }
          <br/>
          <br/>
          {recipe && recipe.rating &&
            <Rating name='read-only' value={recipe.rating.average} readOnly />
          }
          <br/>
          <br/>
          {recipe && recipe?.rating &&
            <Typography variant='body2' color='text.secondary'>
              {recipe.rating.count} reviews
            </Typography>
          }
        </div>
      </div>
    </div>
  </section>
