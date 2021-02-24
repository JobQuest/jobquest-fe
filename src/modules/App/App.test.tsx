import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '.';
import { MemoryRouter, Router } from 'react-router-dom';

test('renders App', () => {
  render(<App />, { wrapper: MemoryRouter });
});
