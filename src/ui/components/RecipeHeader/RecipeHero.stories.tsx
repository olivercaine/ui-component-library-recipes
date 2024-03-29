import { recipes } from '@olivercaine/recipe-data'
import { action } from '@storybook/addon-actions'
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

const defaultArgs = {
  recipe: recipes[0]
}

// @ts-expect-error
export const Default = template({ ...defaultArgs })

// @ts-expect-error
export const WithFavourite = template({
  ...defaultArgs,
  actions: <Favourite
    onChangeCallback={action('onChangeCallback')}
    value={'recipeId1234'}
    css='absolute top-5 right-5'
  />
})
