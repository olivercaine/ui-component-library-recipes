import React, { useState } from 'react'
import { Button } from '../../basics/Button/Button'

export const Stepper = ({
  min = 0,
  max = 5,
  step = 1,
  defaultValue = 0,
  name = 'stepper-name',
  id = 'stepper-id',
  onChange = console.log
}) => {
  const [value, setValue] = useState(defaultValue)

  const handleDecrease = () => {
    const newValue = Math.max(min, value - step)
    setValue(newValue)
    onChange(newValue)
  }

  const handleIncrease = () => {
    const newValue = Math.min(max, value + step)
    setValue(newValue)
    onChange(newValue)
  }

  const handleInput = (e:any) => {
    const inputValue = Math.min(e.target.value) || value
    const newValue = inputValue > max ? max : inputValue < 0 ? 0 : inputValue
    setValue(newValue)
    onChange(newValue)
  }

  return (
    <div data-testid='Stepper'>
      {value > 0 &&
        <span>
          <Button disabled={!value} text='-' onClick={handleDecrease} css='border-0 rounded-r-none cta-bg bg-amber-300'/>
          <input type='text'
            value={value}
            onChange={handleInput}
            name={name}
            id={id}
            className='flex-1 border-0 bg-transparent py-1.5 pl-1 text-center w-12 placeholder:text-gray-400
            focus:ring-0 sm:text-sm sm:leading-6'
          />
        </span>
      }
      <Button disabled={value === max}
        text={value ? '+' : 'Add to cart'}
        onClick={handleIncrease}
        css={`border-0 bg-amber-300 ${value ? 'rounded-l-none' : ''}`}
      />
    </div>
  )
}
