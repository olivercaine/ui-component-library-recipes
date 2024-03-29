import { recipes } from '@olivercaine/recipe-data'
import { action } from '@storybook/addon-actions'
import { expect, jest } from '@storybook/jest'
import { ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { waitFor } from '@testing-library/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Recipes, favouriteSelectors, recipePreviewSelectors, stepperSelectors } from '../../../index'
import { IProps } from './Recipes'

export default {
  component: Recipes,
  title: 'Features/Recipes',
} as ComponentMeta<typeof Recipes>

const template = storyTemplate(Recipes)

const defaultArgs: IProps = {
  recipes,
  onFavouriteToggle: action('onFavouriteToggle'),
  onImageClick: action('onImageClick'),
  onPortionChange: action('onPortionChange'),
}

export const Default = template({ ...defaultArgs })

export const ToggleFavourites = template({
  ...defaultArgs,
  onFavouriteToggle: jest.fn()
})
ToggleFavourites.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  const favRecipeBtn = (uniqueId: string) => canvas.getByTestId(favouriteSelectors({ uniqueId }).button)

  // @ts-expect-error - Favourite recipe 1
  await userEvent.click(await favRecipeBtn(recipes[0].uid))
  await waitFor(() => {
    expect(args.onFavouriteToggle).toHaveBeenCalledWith({
      isFavourite: true,
      // @ts-expect-error
      recipeId: recipes[0].uid
    })
  })

  // @ts-expect-error - Favourite recipe 2
  await userEvent.click(await favRecipeBtn(recipes[1].uid))
  await waitFor(() => {
    expect(args.onFavouriteToggle).toHaveBeenCalledWith({
      isFavourite: true,
      // @ts-expect-error
      recipeId: recipes[1].uid
    })
  })
}

export const ChangePortion = template({
  ...defaultArgs,
  onPortionChange: jest.fn()
})
ChangePortion.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)

  const getStepperSelectors = (uniqueId: string) => stepperSelectors({ uniqueId })

  // @ts-expect-error - Add portion to recipe 1
  await userEvent.click(await canvas.getByTestId(getStepperSelectors(recipes[0].uid).increment))
  await waitFor(() => {
    expect(args.onPortionChange).toHaveBeenCalledWith({
      portionCount: 1,
      // @ts-expect-error
      recipeId: recipes[0].uid
    })
  })

  // @ts-expect-error - Add portion to recipe 1
  await userEvent.click(await canvas.getByTestId(getStepperSelectors(recipes[1].uid).increment))
  await waitFor(() => {
    expect(args.onPortionChange).toHaveBeenCalledWith({
      portionCount: 1,
      // @ts-expect-error
      recipeId: recipes[1].uid
    })
  })
}

export const ClickImage = template({
  ...defaultArgs,
  onImageClick: jest.fn()
})
ClickImage.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)

  const getRecipePreviewSelectors = (uniqueId: string) => recipePreviewSelectors({ uniqueId })
  const getImage = (recipeId: string) => waitFor(async () => await canvas.findByTestId(getRecipePreviewSelectors(recipeId).image))

  defaultArgs.recipes.forEach(async (recipe) => {
    const image = await waitFor(() => getImage(recipe.uid))
    await userEvent.click(image)
    await waitFor(() => {
      expect(args.onImageClick).toHaveBeenCalled()
      expect(args.onImageClick).toHaveBeenCalledWith(recipe.uid)
    })
  })
}

export const CanSetFavourites = template({
  ...defaultArgs,
  // @ts-expect-error
  favourites: [recipes[1].uid]
})
CanSetFavourites.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const favRecipeBtn = (uniqueId: string) => canvas.getByTestId(favouriteSelectors({ uniqueId }).button)

  // @ts-expect-error
  expect(favRecipeBtn(recipes[0].uid)).toHaveClass('bg-gray-200')
  // @ts-expect-error
  expect(favRecipeBtn(recipes[1].uid)).toHaveClass('bg-red-200')
}

export const PortionDefaultValues = template({
  ...defaultArgs,
  portions: {
    // @ts-expect-error
    [recipes[1].uid]: 8
  }
})
PortionDefaultValues.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)

  const getStepperInput = (recipeId: string) =>
    canvas.findByTestId(stepperSelectors({ uniqueId: recipeId }).input)

  // @ts-expect-error
  expect(await getStepperInput(recipes[0].uid)).toHaveAttribute('value', '0')
  // @ts-expect-error
  expect(await getStepperInput(recipes[1].uid)).toHaveAttribute('value', '8')
}
