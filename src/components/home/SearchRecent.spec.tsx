import { render, screen } from '@testing-library/react';
import SearchRecent from './SearchRecent';

describe('components/home/SearchRecent', () => {
  it('test', () => {
    render(<SearchRecent />);

    expect(screen.getByText('recent', { exact: false })).toBeInTheDocument();
  });
});
