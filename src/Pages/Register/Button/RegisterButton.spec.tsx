import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { RenderResult, render, screen } from '@testing-library/react'
import RegisterButton from './RegisterButton'

describe('RegisterButton', () => {
    let component: RenderResult

    beforeEach(() => {
        component = render(<RegisterButton />)
    })

    afterEach(() => {
        component.unmount()
    })

    it('should has a div with the correct className', () => {
        const div = screen.getByTestId('container-register')

        const expected = 'flex items-center justify-center mt-5'

        expect(div.className).toBe(expected)
    })

    it('should a button with submit type', () => {
        const button: HTMLButtonElement = screen.getByTestId('button-register')

        const expected = 'submit'

        expect(button.type).toBe(expected)
    })

    it('should contain a button with text Cadastrar', () => {
        const button: HTMLButtonElement = screen.getByTestId('button-register')

        const expected = 'Cadastrar'

        expect(button.textContent).toBe(expected)
    })
}) 