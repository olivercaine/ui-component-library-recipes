import React, { FC, MouseEventHandler } from 'react'

export const Button: FC<{
  /**
  The text to be shown in the button
  */
  text?: string
  css?: string
  /**
  The callback for when the button is clicked
  */
  onClick?: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}> = ({
  text = 'Button text',
  onClick,
  css,
  disabled = false
}) =>
  <button
    data-testid='Button'
    disabled={disabled}
    className={`relative inline-flex no-underline items-center rounded-md border border-gray-300 px-4 py-2 
    text-sm font-medium hover:bg-gray-50 ${css}`}
    onClick={onClick}>
    {text}
  </button>
