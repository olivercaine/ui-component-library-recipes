import { recipes } from '@olivercaine/recipe-data'
import { action } from '@storybook/addon-actions'
import { expect, jest } from '@storybook/jest'
import { ComponentMeta } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
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
  onImageClick: action('onImageClick'),
}

const favComponent = (props: any) => <Favourite className='absolute top-5 right-5' {...props} />

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
  stepperComponent: <Stepper onChange={action('Setting portion count')} />
})

export const ClickingImage = template({
  ...defaultArgs,
  onImageClick: jest.fn()
})
ClickingImage.play = async ({ args, canvasElement }) => {
  const canvas = await within(canvasElement)
  await canvas.findByRole('img')
  const image = await waitFor(() => canvas.getByTestId('RecipePreview_img--main'))
  await userEvent.click(image)
  await waitFor(() => {
    expect(args.onImageClick).toHaveBeenCalledTimes(1)
    expect(args.onImageClick).toHaveBeenCalledWith('43473cb2-db34-11ed-afa1-000000000001')
  })
}
