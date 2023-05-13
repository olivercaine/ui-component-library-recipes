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

const defaultArgs = {
  onChangeCallback: action('changeCallback'),
  value: '1234'
}

export const Default = template({
  ...defaultArgs
})

export const Unchecked = template({
  ...defaultArgs,
  onChangeCallback: jest.fn(),
})
Unchecked.play = async ({ args, canvasElement }) => {
  const canvas = await within(canvasElement)
  await userEvent.click(canvas.getByRole('checkbox'))
  await waitFor(() => {
    expect(args.onChangeCallback).toHaveBeenCalledWith({
      value: '1234',
      checked: true
    })
  })
}
