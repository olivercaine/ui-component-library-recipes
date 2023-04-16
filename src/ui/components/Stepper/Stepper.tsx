import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import * as React from 'react'

/**
 * Based on: {@link https://codesandbox.io/s/thirsty-rain-i1tzi?fontsize=14&hidenavigation=1&theme=dark&file=/src/GroupedButtons.js:607-781}
 */
export const Stepper = ({
  handleDecrement,
  number,
  handleIncrement,
}: {
  handleIncrement: any
  number: number
  handleDecrement: any
}) =>
  <ButtonGroup size='small' aria-label='small outlined button group'>
    <Button onClick={handleDecrement}>-</Button>
    <Button disabled>{number}</Button>
    <Button onClick={handleIncrement}>+</Button>
  </ButtonGroup>
