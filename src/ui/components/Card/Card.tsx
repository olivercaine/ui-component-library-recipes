import { EzCard } from '@ezcater/recipe'
import React, { FC } from 'react'

export interface IProps {
  /**
  Text to be shown in the button
  */
  text?: string
}

export const Card: FC<IProps> = ({ text = 'Default button text' }: IProps) =>
  <EzCard
    title={text}
    subtitle='Corporate Catering  |  3 mi  |  $$$$'
    imageSrc={'https://ezcater.github.io/recipe/images/thai.jpg'}
    imageMaxHeight={120}
    size='small'
  >
    <p>
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
      4.7 (463 reviews)
    </p>
  </EzCard>
