import { recipes } from '@olivercaine/recipe-data'
import { action } from '@storybook/addon-actions'
import { expect, jest } from '@storybook/jest'
import { ComponentMeta } from '@storybook/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Recipes } from '../../../index'
// import { action } from '@storybook/addon-actions'
// import { ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { waitFor } from '@testing-library/react'
import { selectors } from '../../components/Favourite/Favourite.selectors'
// import { userEvent, within } from '@storybook/testing-library'
// import { storyTemplate } from '../../../../.storybook/helpers'
// import { Favourite } from '../../../index'
// import { selectors } from './Favourite.selectors'

export default {
  component: Recipes,
  title: 'Features/Recipes',
} as ComponentMeta<typeof Recipes>

const template = storyTemplate(Recipes)

const defaultArgs = {
  recipes,
  onStepperChange: action('onStepperChange'),
  onImageClick: action('onStepperChange'),
  dispatch: action('Dispatch')
}

// const favComponent = (props: IProps): Favourite => <Favourite css='absolute top-5 right-5' {...props} />

export const Default = template({ ...defaultArgs })

export const ToggleFavourites = template({
  ...defaultArgs,
  dispatch: jest.fn()
})
ToggleFavourites.play = async ({ args, canvasElement }) => {
  const canvas = await within(canvasElement)
  const favRecipeBtn = (recipeUid: string) => canvas.getByTestId(selectors().button(recipeUid))

  // Favourite recipe 1
  await userEvent.click(await favRecipeBtn(recipes[0].uid))
  await waitFor(() => {
    expect(args.dispatch).toHaveBeenCalledWith({
      checked: true,
      value: recipes[0].uid
    })
  })

  // Favourite recipe 2
  await userEvent.click(await favRecipeBtn(recipes[1].uid))
  await waitFor(() => {
    expect(args.dispatch).toHaveBeenCalledWith({
      checked: true,
      value: recipes[1].uid
    })
  })
}
