import { recipes } from '@olivercaine/recipe-data'
import { action } from '@storybook/addon-actions'
import { ComponentMeta } from '@storybook/react'
import React from 'react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Favourite, RecipePreview, Stepper } from '../../../index'

export default {
  component: RecipePreview,
  title: 'Components/RecipePreview',
} as ComponentMeta<typeof RecipePreview>

const template = storyTemplate(RecipePreview)

const defaultArgs = {
  recipe: recipes[0],
  onImageClick: action,
}

const favComponent = (props: any) => <Favourite className='absolute top-5 right-5' {...props}/>

export const Default = template({ ...defaultArgs })

export const Favourited = template({
  ...defaultArgs,
  favouriteComponent: favComponent({ isFavourite: true })
})

export const NotFavourited = template({
  ...defaultArgs,
  favouriteComponent: favComponent({ isFavourite: false })
})

export const WithStepperComponent = template({
  ...defaultArgs,
  stepperComponent: <Stepper onChange={action('Setting portion count')}/>
})
