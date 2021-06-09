import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../app';

test('loads and displays Header content', async () => {
    render(<App />);
    expect(screen.getByRole('app')).toHaveClass('App');
});
