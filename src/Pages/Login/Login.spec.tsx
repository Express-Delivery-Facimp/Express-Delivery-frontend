import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, RenderResult } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Login } from './Login';

describe('Login', () => {
    let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;

    beforeEach(() => {
        component = render(
            <Router>
                <Login />
            </Router>
        );
    });

    afterEach(() => {
        component.unmount();
    });

    it('should render go back button', () => {
        const backButton = screen.getByAltText('go back');
        expect(backButton).not.toBeNull();
    });

    it('should render express delivery logo', () => {
        const logo = screen.getByAltText('express delivery logo');
        expect(logo).not.toBeNull();
    });

    it('should render delivery guy image', () => {
        const deliveryGuyImage = screen.getByAltText('deliver guy');
        expect(deliveryGuyImage).not.toBeNull();
    });

    it('should render girl with a hamburger image', () => {
        const girlImage = screen.getByAltText('girl with a hamburguer');
        expect(girlImage).not.toBeNull();
    });

    it('should navigate to home page when go back button is clicked', () => {
        const backButton = screen.getByAltText('go back');
        fireEvent.click(backButton);
        expect(window.location.pathname).toBe('/');
    });
});
