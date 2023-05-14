import { action } from '@storybook/addon-actions'
import { expect, jest } from '@storybook/jest'
import { ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { waitFor } from '@testing-library/react'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Favourite } from '../../../index'
import { testIds } from './Favourite.selectors'

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

export const InitialValueTrue = template({
  ...defaultArgs,
  initialValue: true,
})
InitialValueTrue.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  expect(canvas.getByTestId(testIds({ uniqueId: defaultArgs.value }).button)).toHaveClass('bg-red-200')
}

export const InitialValueFalse = template({
  ...defaultArgs,
  initialValue: false,
})
InitialValueFalse.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  expect(canvas.getByTestId(testIds({ uniqueId: defaultArgs.value }).button)).toHaveClass('bg-gray-200')
}

export const Toggle = template({
  ...defaultArgs,
  onChangeCallback: jest.fn()
})
Toggle.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  const btn = canvas.getByTestId(testIds({ uniqueId: defaultArgs.value }).button)
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
