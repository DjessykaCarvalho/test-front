import { render, screen } from '@testing-library/react'
import React from 'react'

import { Typography } from '../../components'

describe('Testing Typography.js', () => {
  it('should be able render Typography', () => {
    render(<Typography>Test</Typography>)

    expect(screen.getByText('Test')).toBeTruthy()
  })
})
