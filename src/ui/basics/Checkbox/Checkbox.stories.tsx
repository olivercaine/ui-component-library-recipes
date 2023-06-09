import { action } from '@storybook/addon-actions'
import { expect, jest } from '@storybook/jest'
import { ComponentMeta } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Checkbox } from '../../../index'

export default {
  component: Checkbox,
  title: 'Basics/Checkbox',
} as ComponentMeta<typeof Checkbox>

const template = storyTemplate(Checkbox)

const select = (canvas: any) => ({ // TODO - assign proper type
  checkbox: canvas.getByRole('checkbox'),
})

const defaultArgs = {
  onChangeCallback: action('changeCallback'),
  value: '1234'
}

export const Default = template({
  ...defaultArgs
})
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  await expect(select(canvas).checkbox).not.toHaveAttribute('checked')
}

export const Unchecked = template({
  ...defaultArgs,
  onChangeCallback: jest.fn(),
})
Unchecked.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  await expect(select(canvas).checkbox).not.toHaveAttribute('checked')
  await userEvent.click(select(canvas).checkbox)
  await waitFor(() => {
    expect(args.onChangeCallback).toHaveBeenCalledWith({
      value: '1234',
      checked: true
    })
  })
  await expect(select(canvas).checkbox).toHaveAttribute('checked')
}
