// import { EzCard, EzRating } from '@ezcater/recipe'
import { EzCard } from '@ezcater/recipe'
import React, { FC } from 'react'
import { Recipe } from '../../../model/types'
// const { fullStar } = require('@fortawesome/free-solid-svg-icons/faStar')
// const { halfStar } = require('@fortawesome/free-solid-svg-icons/faStarHalfStroke')
// const { emptyStar } = require('@fortawesome/free-regular-svg-icons/faStar')

export interface IProps {
  /**
  The recipe to be displayed
  */
  recipe: Recipe
}

export const Card: FC<IProps> = ({ recipe }: IProps) =>
  <EzCard
    title={recipe.title}
    subtitle={`Prep time: ${recipe.prep_times.for_2}mins`}
    imageSrc={recipe.media.images?.length ? recipe.media.images[0].image : undefined}
    imageMaxHeight={120}
    size='small'
  >
    <p>
      {/* <EzRating
        color='primary'
        // emptyIcon={emptyStar}
        // fullIcon={fullStar}
        // halfIcon={halfStar}
        label={`${value} stars`}
        max={5}
        value={value}
      /> */}
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 550 100' height='16' width='80'>
        <path
          id='B'
          d='M57 5l12 38 40-.002-32 24 12 38-32-24-32 24 12-38-32-24L45 43 57 5z'
          fill='currentColor'
        />
        <use width='535' height='110' xlinkHref='#B' x='105' />
        <use width='535' height='110' xlinkHref='#B' x='211' />
        <use width='535' height='110' xlinkHref='#B' x='316' />
        <use width='535' height='110' xlinkHref='#B' x='421' />
      </svg>
      4.7 (462 reviews)
    </p>
  </EzCard>
