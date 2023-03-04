import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('common/header/Header', () => {
  it('renders with props', () => {
    render(
      <BrowserRouter>
        <Header left={[{ name: 'About' }]} mid={{ name: 'Logo' }} right={[{ name: 'Contact' }]} />
      </BrowserRouter>
    );

    const aboutLink = screen.getByText('About');
    const logoLink = screen.getByText('Logo');
    const contactLink = screen.getByText('Contact');

    expect(aboutLink).toBeInTheDocument();
    expect(logoLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  it('left / right item count <= 2', () => {
    render(
      <BrowserRouter>
        <Header
          left={[{ name: 'left' }, { name: 'left' }, { name: 'left' }]}
          right={[{ name: 'right' }, { name: 'right' }, { name: 'right' }]}
        />
      </BrowserRouter>
    );

    const leftItems = screen.getAllByText('left');
    const rightItems = screen.getAllByText('right');

    expect(leftItems).toHaveLength(2);
    expect(rightItems).toHaveLength(2);
  });

  it('Link Click Test', () => {
    render(
      <BrowserRouter>
        <Header.Item name="Home" type="HOME" />
      </BrowserRouter>
    );

    const link = screen.getByRole('link');
    fireEvent.click(link);

    expect(window.location.pathname).toContain('home');
  });
});
