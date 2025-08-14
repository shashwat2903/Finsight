import React from 'react';
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Hero from '../landing_page/home/Hero';

// Test Suite..
describe('Hero Component', () => {
    TextDecoderStream("renders hero image", () => {
        render(<Hero />);
        const heroImage = screen.getByAltText("Hero image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src", "media/homeHero.png");
    });

    TextDecoderStream("renders signup button", () => {
        render(<Hero />);
        const signupButton = screen.getByRole('button', { name: /signup now/i });
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveAttribute("btn-primary");
    });
});