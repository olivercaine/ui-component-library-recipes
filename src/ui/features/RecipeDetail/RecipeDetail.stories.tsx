import { recipes } from '@olivercaine/recipe-data'
import { action } from '@storybook/addon-actions'
import { ComponentMeta } from '@storybook/react'
import React from 'react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Favourite, RecipeDetail } from '../../../index'

export default {
  component: RecipeDetail,
  title: 'Features/RecipeDetail',
} as ComponentMeta<typeof RecipeDetail>

const template = storyTemplate(RecipeDetail)

const defaultArgs = {
  recipe: recipes[0]
}

export const Default = template({ ...defaultArgs })

export const CremeBrulee = template({ ...defaultArgs, recipe: recipes[1] })

export const WithFavourite = template({
  ...defaultArgs,
  recipe: recipes[1],
  actions: <Favourite value={defaultArgs.recipe.uid} css='absolute top-5 right-5' onChangeCallback={action('onChangeCallback')} />
})
