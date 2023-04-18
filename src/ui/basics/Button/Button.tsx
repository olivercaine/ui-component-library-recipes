import React, { FC, MouseEventHandler } from 'react'

export const Button: FC<{
  /**
  The text to be shown in the button
  */
  text?: string
  /**
  The callback for when the button is clicked
  */
  onClick: MouseEventHandler<HTMLButtonElement>
}> = ({
  text = 'Button text',
  onClick,
}) =>
  <button
    className='relative inline-flex items-center rounded-md border border-gray-300 bg-white
    px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
    onClick={onClick}>
    {text}
  </button>
