import React, { ChangeEventHandler, FC } from 'react'

export const Checkbox: FC<{
  /**
  The text to be shown in the button
  */
  text?: string
  css?: string
  /**
  The callback for when the button is clicked
  */
  onChange?: ChangeEventHandler<HTMLInputElement>
  disabled?: boolean
}> = ({
  text = 'Button text',
  onChange,
  css,
  disabled = false
}) =>
  <input
    data-testid='Checkbox'
    disabled={disabled}
    type='checkbox'
    className={`relative inline-flex no-underline items-center rounded-md px-4 py-2 
    text-sm font-medium hover:bg-gray-50 ${css}`}
    onChange={onChange}
  />