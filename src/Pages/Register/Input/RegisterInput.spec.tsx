import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { RenderResult, render, screen } from '@testing-library/react'
import RegisterInput from './RegisterInput'

describe('RegisterInput', () => {
    let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;

    beforeEach(() => {
        component = render(
            <RegisterInput
                label="Nome Completo"
                placeholder="Digite seu nome completo"
                type="text"
            />
        );
    });

    afterEach(() => {
        component.unmount();
    });

    it('should render input field with correct label and placeholder', () => {
        const label = screen.getByText('Nome Completo');
        const input = screen.getByPlaceholderText('Digite seu nome completo');

        expect(label).not.toBeNull();
        expect(input).not.toBeNull();
    });

    it('should render error message when provided', () => {
        const errorMessage = 'Campo obrigatório';

        component.rerender(
            <RegisterInput
                label="Nome Completo"
                placeholder="Digite seu nome completo"
                type="text"
                errorMessage={errorMessage}
            />
        );

        const error = screen.getByText(errorMessage);
        expect(error).not.toBeNull();
    });
});
