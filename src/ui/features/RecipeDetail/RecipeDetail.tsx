import Grid from '@mui/joy/Grid'
import Sheet from '@mui/joy/Sheet'
import { styled } from '@mui/joy/styles'
import React, { FC } from 'react'
import { CookingInstructionsEntity, IngredientsEntity, Recipe } from '../../../model/types'
import { CookingInstructions } from '../../components/CookingInstructions/CookingInstructions'
import { Ingredients } from '../../components/Ingredients/Ingredients'

export interface IProps {
  /**
  Text to be shown in the button
  */
  recipe: Recipe
}

const Item = styled(Sheet)(({ theme }: { theme: any }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.vars.palette.text.tertiary,
}))

export const RecipeDetail: FC<IProps> = ({ recipe }: IProps) =>
  <div className='RecipeDetail'>
    <Grid container sx={{ flexGrow: 1 }}>
      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <img alt='ecommerce' className='lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded' src={recipe?.media?.images?.length ? recipe?.media?.images[0]?.image : undefined}/>
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
              <h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>{recipe.title}</h1>
              <div className='flex mb-4'>
                <span className='flex items-center'>
                  <svg fill='currentColor' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' className='w-4 h-4 text-indigo-500' viewBox='0 0 24 24'>
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg fill='currentColor' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' className='w-4 h-4 text-indigo-500' viewBox='0 0 24 24'>
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg fill='currentColor' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' className='w-4 h-4 text-indigo-500' viewBox='0 0 24 24'>
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg fill='currentColor' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' className='w-4 h-4 text-indigo-500' viewBox='0 0 24 24'>
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <svg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' className='w-4 h-4 text-indigo-500' viewBox='0 0 24 24'>
                    <path d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'></path>
                  </svg>
                  <span className='text-gray-600 ml-3'>4 Reviews</span>
                </span>
                <span className='flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s'>
                  <a className='text-gray-500'>
                    <svg fill='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' className='w-5 h-5' viewBox='0 0 24 24'>
                      <path d='M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z'></path>
                    </svg>
                  </a>
                  <a className='text-gray-500'>
                    <svg fill='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' className='w-5 h-5' viewBox='0 0 24 24'>
                      <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                    </svg>
                  </a>
                  <a className='text-gray-500'>
                    <svg fill='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' className='w-5 h-5' viewBox='0 0 24 24'>
                      <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className='leading-relaxed'>{recipe.description}.</p>
              <div className='flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5'>
                <div className='flex'>
                  <span className='mr-3'>Prep time: {recipe.prep_times.for_2}mins</span>
                </div>
              </div>
              <div className='flex'>
                <div className='custom-number-input h-10 w-32'>
                  <label htmlFor='custom-input-number' className='w-full text-gray-700 text-sm font-semibold'>
                  </label>
                  <div className='flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1'>
                    <button data-action='decrement' className=' bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none'>
                      <span className='m-auto text-2xl font-thin'>−</span>
                    </button>
                    <input type='number' className='outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none' name='custom-input-number' value='0'></input>
                    <button data-action='increment' className='bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer'>
                      <span className='m-auto text-2xl font-thin'>+</span>
                    </button>
                  </div>
                </div>
                <button className='rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4'>
                  <svg fill='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' className='w-5 h-5' viewBox='0 0 24 24'>
                    <path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Grid md={4}>
        <Item>
          <Ingredients ingredients={recipe.ingredients as IngredientsEntity[]} />
        </Item>
      </Grid>
      <Grid md={8}>
        <Item>
          <CookingInstructions cookingInstructions={recipe.cooking_instructions as CookingInstructionsEntity[]} />
        </Item>
      </Grid>
    </Grid>
  </div>
