import React, { FC, MouseEventHandler } from 'react'

export const Button: FC<{
  /**
  The text to be shown in the button
  */
  text?: string
  /**
 The custom CSS
  */
  css?: string
  /**
  The callback for when the button is clicked
  */
  onClick?: MouseEventHandler<HTMLButtonElement>
  /**
 Whether the button is disabled
  */
  disabled?: boolean,
  /**
  The unique data test id
  */
  dataTestId?: string
}> = ({
  text = 'Button text',
  onClick,
  css,
  disabled = false,
  dataTestId = 'Button'
}) =>
  <button
    data-testid={dataTestId}
    disabled={disabled}
    className={`relative inline-flex no-underline items-center rounded-md border border-gray-300 px-4 py-2 
    text-sm font-medium hover:bg-gray-50 ${css}`}
    onClick={onClick}>
    {text}
  </button>
