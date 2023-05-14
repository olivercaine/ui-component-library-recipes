import { action } from '@storybook/addon-actions'
import { expect, jest } from '@storybook/jest'
import { ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { waitFor } from '@testing-library/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Favourite } from '../../../index'
import { selectors } from './Favourite selectors'

export default {
  component: Favourite,
  title: 'Components/Favourite',
} as ComponentMeta<typeof Favourite>

const template = storyTemplate(Favourite)

const defaultArgs = {
  onChangeCallback: action('onClick'),
  value: '1234',
  css: 'absolute'
}

export const Default = template({
  ...defaultArgs,
})

export const DefaultFavourite = template({
  ...defaultArgs,
  checkedInit: true,
})
DefaultFavourite.play = async ({ canvasElement }) => {
  const canvas = await within(canvasElement)
  expect(canvas.getByTestId(selectors().button(defaultArgs.value))).toHaveClass('bg-red-200')
}

export const DefaultNotFavourite = template({
  ...defaultArgs,
  checkedInit: false,
})
DefaultNotFavourite.play = async ({ canvasElement }) => {
  const canvas = await within(canvasElement)
  expect(canvas.getByTestId(selectors().button(defaultArgs.value))).toHaveClass('bg-gray-200')
}

export const Toggle = template({
  ...defaultArgs,
  onChangeCallback: jest.fn()
})
Toggle.play = async ({ args, canvasElement }) => {
  const canvas = await within(canvasElement)
  const btn = canvas.getByTestId(selectors().button(defaultArgs.value))
  expect(btn).toHaveClass('bg-gray-200') // Start gray

  await userEvent.click(btn)
  await waitFor(() => {
    expect(args.onChangeCallback).toHaveBeenCalledWith({
      value: '1234',
      checked: true,
    })
    expect(btn).toHaveClass('bg-red-200') // Click to red
  })

  await userEvent.click(btn)
  await waitFor(() => {
    expect(args.onChangeCallback).toHaveBeenCalledWith({
      value: '1234',
      checked: false,
    })
    expect(btn).toHaveClass('bg-gray-200') // Click to gray
  })
}
