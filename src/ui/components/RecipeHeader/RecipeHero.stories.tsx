import { recipes } from '@olivercaine/recipe-data'
import { ComponentMeta } from '@storybook/react'
import React from 'react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Favourite } from '../Favourite/Favourite'
import { RecipeHero } from './RecipeHero'

export default {
  component: RecipeHero,
  title: 'Components/RecipeHero',
} as ComponentMeta<typeof RecipeHero>

const template = storyTemplate(RecipeHero)

const favComponent = (props: any) => <Favourite className='absolute top-5 right-5' {...props}/>

const defaultArgs = {
  recipe: recipes[0]
}

export const Default = template({ ...defaultArgs })

export const WithFavourite = template({
  ...defaultArgs,
  favouriteComponent: favComponent({ isFavourite: true })
})
