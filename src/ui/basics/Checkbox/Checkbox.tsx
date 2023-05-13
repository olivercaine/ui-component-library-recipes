/* eslint-disable indent */
import React, { FC } from 'react'
const { useState } = React

export interface IChangeCallbackValue {
  value: string | number,
  checked: boolean
}

export const Checkbox: FC<{
  /**
  Any custom CSS
  */
  css?: string
  /**
  The callback which takes an object in the form `{ value, checked }`
  */
  onChangeCallback: ({ value, checked }: IChangeCallbackValue) => void
  value: string | number,
}> = ({
  css,
  onChangeCallback,
  value
}) => {
    const [checked, setChecked] = useState<IChangeCallbackValue>({
      checked: false,
      value
    })

    const handleChange = (checked: boolean) => {
      const newVal: IChangeCallbackValue = {
        checked,
        value
      }
      setChecked(newVal)
      onChangeCallback(newVal)
    }

    return (<input
      data-testid='Checkbox'
      disabled={!checked}
      role='checkbox'
      type='checkbox'
      className={`relative inline-flex no-underline items-center rounded-md px-4 py-2 
    text-sm font-medium hover:bg-gray-50 ${css}`}
      onChange={e => handleChange(e.target.checked)}
    />)
  }
