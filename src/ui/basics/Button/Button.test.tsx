import { render, screen } from '@testing-library/react'
import React from 'react'
import { Button } from './Button'

describe('Button', () => {
  it('Should contain "My custom component text"', () => {
    render(<Button text='Button text' />)
    expect(screen.getByText('Button text')).toBeInTheDocument()
  })
})
