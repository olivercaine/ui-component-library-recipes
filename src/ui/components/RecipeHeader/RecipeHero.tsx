import { IRecipe } from '@olivercaine/recipe-data/types'
import React, { FC } from 'react'
import { Favourite } from '../Favourite/Favourite'
import { Rating } from '../Rating/Rating'

export const RecipeHero: FC<{
  /**
  The recipe to show
  */
  recipe: Partial<IRecipe>
}> = ({
  recipe
}) =>
  <div data-testid='RecipeHero'>
    <section className='body-font'>
      <div className='container mx-auto flex py-6 md:flex-row flex-col items-center'>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
          <Favourite className='absolute top-5 right-5' isFavourite={false}/>
          <img className='object-cover object-center rounded-lg'
            alt='hero'
            // eslint-disable-next-line max-len
            src='https://raw.githubusercontent.com/olivercaine/ui-component-library-recipes/main/src/images/eggs-benedict/dalle-2023-04-15-122313-close-up-of-eggs-benedict-on-a-blue-plate-in-a-sunny-kitchen.png'/>
        </div>
        <div className='lg:flex-grow md:w-1/2 lg:pl-12 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-neutral-300'>
            {recipe?.title}
          </h1>
          <p className='mb-8 leading-relaxed text-neutral-400'>{recipe?.description}</p>
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
              <span>{recipe.rating.count} reviews</span>
            }
          </div>
        </div>
      </div>
    </section>
  </div>