import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { RenderResult, render, screen } from '@testing-library/react';
import SearchField from './SearchField';
import magnifying from "../../../assets/icons/magnifying-glassHome.svg";

describe('SearchField', () => {
    let component: RenderResult;

    beforeEach(() => {
        component = render(<SearchField placeholder={'algo'} />);
    });

    afterEach(() => {
        component.unmount();
    });

    it('should render a label with htmlFor attribute pointing to the input', () => {
        const label: HTMLLabelElement = screen.getByTestId('label-search');

        const input: HTMLInputElement = screen.getByTestId('input-search');

        expect(label.htmlFor).toBe(input.id);
    });

    it('should render an image with correct src attribute', () => {
        const img: HTMLImageElement = screen.getByTestId('img-search');

        expect(img.src).toContain(magnifying);
    });

    it('should render an image with correct alt attribute', () => {
        const img: HTMLImageElement = screen.getByTestId('img-search');

        expect(img.alt).toBe('magnifying-glass');
    });

    it('should has a input with the correct className', () => {
        const inputS = screen.getByTestId('input-search');

        const expected = 'w-full h-12 focus:outline-none rounded-[10px] font-medium text-xl text-[#CDCCCC]';

        expect(inputS.className).toContain(expected);
    });

    it('should a input with search type', () => {
        const input: HTMLInputElement = screen.getByTestId('input-search');

        const expected = 'search';

        expect(input.type).toBe(expected);
    });

    it('should a input with search type', () => {
        const input: HTMLInputElement = screen.getByTestId('input-search');

        const expectedRequired = true;

        expect(input.required).toBe(expectedRequired);
    });

    it('should a input with id "searchInput"', () => {
        const input: HTMLInputElement = screen.getByTestId('input-search');

        const expectedId = 'searchInput';

        expect(input.id).toBe(expectedId);
    });

    it('should a input with name "search"', () => {
        const input: HTMLInputElement = screen.getByTestId('input-search');

        const expectedName = 'search';

        expect(input.name).toBe(expectedName);
    });

    it('should a input with minLength of 1', () => {
        const input: HTMLInputElement = screen.getByTestId('input-search');

        const expectedMinLength = 1;

        expect(input.minLength).toBe(expectedMinLength);
    });

    it('should a input with correct placeholder', () => {
        const input: HTMLInputElement = screen.getByTestId('input-search');

        const expectedPlaceholder = 'algo';

        expect(input.placeholder).toBe(expectedPlaceholder);
    });
});
