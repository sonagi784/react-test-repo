import { render, screen } from '@testing-library/react';
import SearchForm from './SearchForm';

describe('common/header/Header', () => {
  it('render Test', () => {
    render(<SearchForm />);

    expect(screen.getByPlaceholderText('')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '검색' })).toBeInTheDocument();
  });
});
