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

  // Favourite recipe 1
  await userEvent.click(await favRecipeBtn(recipes[0].uid))
  await waitFor(() => {
    expect(args.onFavouriteToggle).toHaveBeenCalledWith({
      checked: true,
      value: recipes[0].uid
    })
  })

  // Favourite recipe 2
  await userEvent.click(await favRecipeBtn(recipes[1].uid))
  await waitFor(() => {
    expect(args.onFavouriteToggle).toHaveBeenCalledWith({
      checked: true,
      value: recipes[1].uid
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

  // Add portion to recipe 1
  await userEvent.click(await canvas.getByTestId(getStepperSelectors(recipes[0].uid).increment))
  await waitFor(() => {
    expect(args.onPortionChange).toHaveBeenCalledWith({
      portionCount: 1,
      recipeId: recipes[0].uid
    })
  })

  // Add portion to recipe 1
  await userEvent.click(await canvas.getByTestId(getStepperSelectors(recipes[1].uid).increment))
  await waitFor(() => {
    expect(args.onPortionChange).toHaveBeenCalledWith({
      portionCount: 1,
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
