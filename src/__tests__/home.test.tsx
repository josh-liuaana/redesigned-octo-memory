import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', { level: 1 })

    const headerText = screen.getByText('Athena - your one stop lore shop')
    const headingText = screen.getByRole('heading', {
      name: /athena/i,
    })

    expect(heading).toBeInTheDocument()
    expect(headerText).toBeInTheDocument()
    expect(headingText).toBeInTheDocument()
  })
})
