import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'
// import '@testing-library/jest-dom'

test('Page', () => {
    render(<Page />)
    // expect(screen.getByText('Home')).toBeInTheDocument();
    // expect(screen.getByRole('heading')).toHaveTextContent('hello there')
    expect(screen.getByRole('heading', { level: 1, name: 'Home'})).toBeDefined()
})