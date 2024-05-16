import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { RenderResult, render, screen } from '@testing-library/react'
import LoginInput from './LoginInput'

describe('LoginInput', () => {
    let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;

    beforeEach(() => {
        component = render(
            <LoginInput
                label="Email"
                placeholder="Digite seu email"
                type="text"
                image="/path/to/email-icon.png"
            />
        );
    });

    afterEach(() => {
        component.unmount();
    });

    it('should render input field with correct label, placeholder, and icon', () => {
        const label = screen.getByText('Email');
        const input = screen.getByPlaceholderText('Digite seu email');
        const icon = screen.getByAltText('Email');

        expect(label).not.toBeNull();
        expect(input).not.toBeNull();
        expect(icon).not.toBeNull();
    });

    it('should render error message when provided', () => {
        const errorMessage = 'Campo obrigatório';

        component.rerender(
            <LoginInput
                label="Email"
                placeholder="Digite seu email"
                type="text"
                errorMessage={errorMessage}
                image="/path/to/email-icon.png"
            />
        );

        const error = screen.getByText(errorMessage);
        expect(error).not.toBeNull();
    });
    
    it('should be associated with the correct label', () => {
        const label = screen.getByText('Email');
        const input = screen.getByTestId('Email-input');
        expect(label.getAttribute('for')).toBe(input.id);
    });

});
