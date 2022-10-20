import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';
import App from '../App';

describe('Testa o componente FavoritePokemons', () => {
  it('Testa se é exibida a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);

    const noFavoriteFound = screen.getByText(/no favorite/i);
    expect(noFavoriteFound).toBeInTheDocument();
  });

  it('Testa se são exibidos os cards de pokémons favoritados', () => {
    renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', { name: /details/i });
    userEvent.click(detailsLink);

    const favoriteCheck = screen.getByLabelText(/favoritado/i);
    userEvent.click(favoriteCheck);

    renderWithRouter(<FavoritePokemons />);
    const pokemon = screen.getByTestId('pokemon-name');
    expect(pokemon).toBeInTheDocument();
  });
});
