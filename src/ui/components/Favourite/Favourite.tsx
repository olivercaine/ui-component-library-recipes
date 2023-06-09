/* eslint-disable max-len */
import React, { FC } from 'react'
import { testIds } from './Favourite.selectors'
const { useState } = React

export const Favourite: FC<{
  initialValue?: boolean
  /**
  Any custom CSS
  */
  css?: string
  /**
  The callback which takes an object in the form `{ value, checked }`
  */
  onChangeCallback: ({ value, isFavourite }: { value: string | number, isFavourite: boolean }) => void
  value: string | number,
}> = ({
  initialValue: checkedInit = false,
  css,
  onChangeCallback,
  value,
}) => {
  const [checked, setChecked] = useState<boolean>(checkedInit)

  const dti = testIds({
    uniqueId: value.toString()
  })

  const onClickHandler = (/* e: UIEvent */) => {
    setChecked(!checked)
    onChangeCallback({
      isFavourite: !checked,
      value
    })
  }

  return (
    <div data-testid={dti.wrapper}>
      <button data-testid={dti.button} onClick={onClickHandler} className={`rounded-full w-10 h-10 p-0 border-0 inline-flex items-center justify-center text-gray-500 ${css} ${checked ? 'bg-red-200' : 'bg-gray-200'}`}>
        <svg fill={checked ? 'red' : 'gray'} strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-5 h-5' viewBox='0 0 24 24'>
          <path d='M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z'></path>
        </svg>
      </button>
    </div>
  )
}
