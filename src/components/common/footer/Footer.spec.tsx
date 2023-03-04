import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('commmon/footer/Footer', () => {
  it('render footer', () => {
    render(<Footer />);

    const learnReact = screen.getByText('Learn React');

    expect(learnReact).toBeInTheDocument();
  });
});
