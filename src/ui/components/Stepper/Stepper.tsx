import ButtonGroup from '@mui/material/ButtonGroup'
import React from 'react'
import { Button } from '../../basics/Button/Button'

export const Stepper = ({
  handleDecrement,
  number,
  handleIncrement,
}: {
  handleIncrement: (count: number) => void
  number: number
  handleDecrement: (count: number) => void
}) => {
  let count = number

  const handleUp = () => {
    ++count
    handleIncrement(count)
  }

  const handleDown = () => {
    --count
    handleDecrement(count)
  }

  return (
    <ButtonGroup size='small' aria-label='small outlined button group'>
      <Button onClick={handleDown} text='-'/>
      <Button text={count.toString()}/>
      <Button onClick={handleUp} text='+'/>
    </ButtonGroup>
  )
}
