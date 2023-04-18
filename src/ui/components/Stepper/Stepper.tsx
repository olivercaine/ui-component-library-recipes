import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import React from 'react'

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
      <Button onClick={handleDown}>-</Button>
      <Button disabled>{count}</Button>
      <Button onClick={handleUp}>+</Button>
    </ButtonGroup>
  )
}
