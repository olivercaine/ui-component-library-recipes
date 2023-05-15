import React, { FC, useState } from 'react'
import { Button } from '../../basics/Button/Button'
import { testIds } from './Stepper.selectors'

export interface IProps {
  min?: number,
  max?: number,
  step?: number,
  defaultValue?: number,
  name?: string,
  id: number | string,
  onChange: any // TODO
}

export const Stepper: FC<IProps> = ({
  min = 0,
  max = 1000, // TODO: remove max
  step = 1,
  defaultValue = 0,
  name = 'stepper-name',
  id = undefined,
  onChange = console.log
}) => {
  const [value, setValue] = useState(defaultValue)

  const dti = testIds({
    uniqueId: id?.toString()
  })

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

  const handleInput = (e: any) => {
    const inputValue = Math.min(e.target.value) || value
    const newValue = inputValue > max ? max : inputValue < 0 ? 0 : inputValue
    setValue(newValue)
    onChange(newValue)
  }

  return (
    <div data-testid={dti.wrapper}>
      {value > 0 &&
        <>
          <Button disabled={!value}
            dataTestId={dti.decrement}
            text='-'
            onClick={handleDecrease} css='border-0 rounded-r-none bg-amber-300'
          />
        </>
      }
      <input type='text'
        value={value}
        data-testId={dti.input}
        onChange={handleInput}
        name={name}
        id={id?.toString()}
        className={`flex-1 border-0 bg-transparent py-1.5 pl-1 text-center w-12 placeholder:text-gray-400 
        focus:ring-0 sm:text-sm sm:leading-6 ${!value && 'hidden'}`}
      />
      <Button disabled={value === max}
        dataTestId={dti.increment}
        text={value ? '+' : 'Add portion'}
        onClick={handleIncrease}
        css={`border-0 bg-amber-300 ${value ? 'rounded-l-none' : ''}`}
      />
    </div>
  )
}
