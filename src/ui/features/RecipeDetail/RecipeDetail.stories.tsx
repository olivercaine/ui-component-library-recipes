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

// @ts-expect-error
export const Default = template({ ...defaultArgs })

// @ts-expect-error
export const CremeBrulee = template({ ...defaultArgs, recipe: recipes[1] })

export const WithFavourite = template({
  ...defaultArgs,
  // @ts-expect-error
  recipe: recipes[1],
  // @ts-expect-error
  actions: <Favourite value={defaultArgs.recipe.uid} css='absolute top-5 right-5' onChangeCallback={action('onChangeCallback')} />
})
