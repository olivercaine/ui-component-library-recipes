import { action } from '@storybook/addon-actions'
import { expect } from '@storybook/jest'
import { ComponentMeta } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Stepper } from '../../../index'

export default {
  component: Stepper,
  title: 'Components/Stepper',
} as ComponentMeta<typeof Stepper>

const template = storyTemplate(Stepper)

const defaultArgs = {
  onChange: action('On Change'),
}

export const Default = template({ ...defaultArgs })
Default.play = async ({ args, canvasElement }) => {
  const canvas = await within(canvasElement)

  const incrementButton = await canvas.findByTestId('Stepper_button--increment')
  await userEvent.click(incrementButton)
  // const input = await canvas.findByTestId('Stepper_input')
  await waitFor(() => {
    expect(args.onChange).toHaveBeenCalledWith(1)
    // expect(parseInt(input.value)).toBe(1)
  })

  const decrementButton = await canvas.findByTestId('Stepper_button--decrement')
  await userEvent.click(decrementButton)
  await waitFor(() => {
    expect(args.onChange).toHaveBeenCalledWith(0)
    // expect(parseInt(input.value)).toBe(0)
  })
}
