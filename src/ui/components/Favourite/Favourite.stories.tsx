import { action } from '@storybook/addon-actions'
import { expect, jest } from '@storybook/jest'
import { ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Favourite } from '../../../index'

export default {
  component: Favourite,
  title: 'Components/Favourite',
} as ComponentMeta<typeof Favourite>

const template = storyTemplate(Favourite)

const select = (canvas: any) => ({ // TODO - assign proper type
  button: canvas.getByRole('button'),
})

const defaultArgs = {
  onChangeCallback: action('onClick'),
  value: '1234',
  css: 'absolute'
}

export const Default = template({
  ...defaultArgs,
})
Default.play = async ({ args, canvasElement }) => {
  const canvas = await within(canvasElement)
  expect(select(canvas).button).toHaveClass('bg-gray-200')
}

export const NotFavourite = template({
  ...defaultArgs,
  checkedInit: false,
  onChangeCallback: jest.fn(),
})
NotFavourite.play = async ({ args, canvasElement }) => {
  const canvas = await within(canvasElement)
  expect(select(canvas).button).toHaveClass('bg-gray-200')
}

export const IsFavourite = template({
  ...defaultArgs,
  checkedInit: true,
  onChangeCallback: jest.fn(),
})
IsFavourite.play = async ({ args, canvasElement }) => {
  const canvas = await within(canvasElement)
  await userEvent.click(select(canvas).button)
  expect(select(canvas).button).toHaveClass('bg-red-200')
}
