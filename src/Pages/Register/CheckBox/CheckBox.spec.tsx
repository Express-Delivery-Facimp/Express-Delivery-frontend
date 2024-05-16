import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { RenderResult, render, screen } from '@testing-library/react'
import CheckBox from './CheckBox'

describe('CheckBox', () => {
    let component: RenderResult

    beforeEach(() => {
        component = render(<CheckBox />)
    })

    afterEach(() => {
        component.unmount()
    })

    it('should render checkbox input element', () => {
        const checkboxInput = screen.getByTestId('checkbox-input')

        expect(checkboxInput).toBeTruthy()
    })

    it('should render terms and conditions text', () => {
      const termsAndConditionsText = screen.getByText(/Termos e Condições de uso/i)
  
      expect(termsAndConditionsText).toBeTruthy()
  
  })
  
    it('should render error message when provided', () => {
        const errorMessage = 'Erro!'

        component.rerender(<CheckBox errorMessage={errorMessage} />)

        const errorMessageElement = screen.getByText(errorMessage)

        expect(errorMessageElement).toBeTruthy()
    })

})
