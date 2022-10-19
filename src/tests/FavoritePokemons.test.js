import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../pages/FavoritePokemons';

describe('Testa o componente FavoritePokemons', () => {
  it('Testa se é exibida a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemons />);

    const noFavoriteFound = screen.getByText(/no favorite/i);
    expect(noFavoriteFound).toBeInTheDocument();
  });
});
