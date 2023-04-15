import { EzButton } from '@ezcater/recipe'
import React, { FC, MouseEventHandler } from 'react'

export interface IProps {
  /**
  The callback to call when the button is clicked
  */
  onClick: MouseEventHandler<HTMLButtonElement>
  /**
  Button text
  */
  text?: string
}

export const Button: FC<IProps> = ({ onClick, text = 'Default button text' }: IProps) =>
  <EzButton onClick={onClick}> {text}</EzButton>
