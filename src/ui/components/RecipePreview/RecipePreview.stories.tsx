import { recipes } from '@olivercaine/recipe-data'
import { IRecipe } from '@olivercaine/recipe-data/types'
import { action } from '@storybook/addon-actions'
import { expect, jest } from '@storybook/jest'
import { ComponentMeta } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import React from 'react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Favourite as Favorite, RecipePreview, Stepper, favouriteSelectors, recipePreviewSelectors } from '../../../index'

export default {
  component: RecipePreview,
  title: 'Components/RecipePreview',
} as ComponentMeta<typeof RecipePreview>

const template = storyTemplate(RecipePreview)

const defaultArgs = {
  recipe: recipes[0],
  onImageClick: action('onImageClick'),
}

const favouriteCallback = jest.fn()

const recipePreviewActions = ({ recipe, favouriteCallback }: { recipe: IRecipe, favouriteCallback: any }) =>
  <>
    <Favorite value={recipe.uid} css='absolute top-5 right-5' onChangeCallback={favouriteCallback} />
  </>

// @ts-expect-error
export const Default = template({ ...defaultArgs })

// @ts-expect-error
export const WithFavouriteAction = template({
  ...defaultArgs,
  actions: recipePreviewActions({
    // @ts-expect-error
    recipe: defaultArgs.recipe,
    favouriteCallback
  })
})
WithFavouriteAction.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  // @ts-expect-error
  const favBtn = canvas.getByTestId(favouriteSelectors({ uniqueId: defaultArgs.recipe.uid }).button)
  await userEvent.click(favBtn)
  expect(favBtn).toHaveClass('bg-red-200')
  expect(favouriteCallback).toHaveBeenCalledWith({
    // @ts-expect-error
    value: defaultArgs.recipe.uid,
    isFavourite: true,
  })
}

// @ts-expect-error
export const WithCustomAction = template({
  ...defaultArgs,
  actions: [
    <button
      key={1}
      className={'justify-center text-gray-500 absolute top-5 right-5 bg-white'}
      onClick={action('Button callback')}>
      A custom action
    </button>
  ]
})

// @ts-expect-error
export const WithStepperComponent = template({
  ...defaultArgs,
  // @ts-expect-error
  stepperComponent: <Stepper id={defaultArgs.recipe.uid} onChange={action('Setting portion count')} />
})

// @ts-expect-error
export const ClickingImage = template({
  ...defaultArgs,
  onImageClick: jest.fn()
})
ClickingImage.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  await canvas.findByRole('img')

  const image = await waitFor(() => canvas.getByTestId(
    // @ts-expect-error
    recipePreviewSelectors({ uniqueId: defaultArgs.recipe.uid }).image
  ))
  await userEvent.click(image)
  await waitFor(() => {
    expect(args.onImageClick).toHaveBeenCalledTimes(1)
    expect(args.onImageClick).toHaveBeenCalledWith('43473cb2-db34-11ed-afa1-000000000001')
  })
}
