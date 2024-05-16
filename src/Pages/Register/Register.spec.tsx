import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, RenderResult } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from './Register';

describe('Register', () => {
    let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;

    beforeEach(() => {
        component = render(
            <Router>
                <Register />
            </Router>
        );
    });

    afterEach(() => {
        component.unmount();
    });

    it('should render back button', () => {
        const backButton = screen.getByAltText('go back');
        expect(backButton).not.toBeNull();
    });

    it('should render free delivery image', () => {
        const freeDeliveryImage = screen.getByAltText('free delivery');
        expect(freeDeliveryImage).not.toBeNull();
    });

    it('should navigate to home page when back button is clicked', () => {
        const backButton = screen.getByAltText('go back');
        fireEvent.click(backButton);
        expect(window.location.pathname).toBe('/');
    });
});
