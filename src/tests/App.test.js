import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa as rotas da aplicação Pokedex', () => {
  it('Testa o link Home', () => {
    const { history } = renderWithRouter(<App />);

    const linkHome = screen.getByText('Home');
    expect(linkHome).toBeInTheDocument();

    userEvent.click(linkHome);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('Testa o link About', () => {
    const { history } = renderWithRouter(<App />);

    const linkAbout = screen.getByText('About');
    expect(linkAbout).toBeInTheDocument();

    userEvent.click(linkAbout);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  it('Testa o link Favorite Pokémons', () => {
    const { history } = renderWithRouter(<App />);

    const linkFavorites = screen.getByText('Favorite Pokémons');
    expect(linkFavorites).toBeInTheDocument();

    userEvent.click(linkFavorites);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  it('Testa se é redirecionado a página Not Found ao entrar em url desconhecida', () => {
    const { history, getByRole } = renderWithRouter(<App />);

    act(() => {
      history.push('/trybe');
    });

    const { pathname } = history.location;

    const textNotFound = getByRole('heading', { level: 2, name: /page requested/i });
    expect(textNotFound).toBeInTheDocument();
    expect(pathname).toBe('/trybe');
  });
});
