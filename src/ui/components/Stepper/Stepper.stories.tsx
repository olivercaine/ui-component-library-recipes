import { action } from '@storybook/addon-actions'
import { expect } from '@storybook/jest'
import { ComponentMeta } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { storyTemplate } from '../../../../.storybook/helpers'
import { Stepper } from '../../../index'
import { selectors } from './Stepper.selectors'

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

  const incrementButton = await canvas.findByTestId(selectors().increment())
  await userEvent.click(incrementButton)
  const input = await canvas.findByTestId(selectors().input())
  await waitFor(() => {
    expect(args.onChange).toHaveBeenCalledWith(1)
    expect(input).toHaveAttribute('value', '1')
  })

  const decrementButton = await canvas.findByTestId(selectors().decrement())
  await userEvent.click(decrementButton)
  await waitFor(() => {
    expect(args.onChange).toHaveBeenCalledWith(0)
    expect(input).toHaveAttribute('value', '0')
  })
}
