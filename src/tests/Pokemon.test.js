import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente Pokemon', () => {
  it('Testa se é renderizado um card com as informações de determinado pokemon', () => {
    renderWithRouter(<App />);

    const pokemonName = screen.getByTestId('pokemon-name');
    expect(pokemonName).toHaveTextContent('Pikachu');

    const pokemonType = screen.getByTestId('pokemon-type');
    expect(pokemonType).toHaveTextContent('Electric');

    const pokemonWeight = screen.getByTestId('pokemon-weight');
    expect(pokemonWeight).toHaveTextContent('Average weight: 6.0 kg');

    const pokemonImage = screen.getByRole('img', { name: 'Pikachu sprite' });
    expect(pokemonImage.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });

  it('Testa se o componente tem um link de Details', () => {
    renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', { name: /details/i });
    expect(detailsLink).toBeInTheDocument();
  });

  it('Testa se ao clicar no link de Details é redirecionado para a página de detalhes', () => {
    const { history } = renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', { name: /details/i });
    userEvent.click(detailsLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  it('Testa se tem um ícone de estrela nos pokémons favoritados', () => {
    renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', { name: /details/i });
    userEvent.click(detailsLink);

    const favoriteCheck = screen.getByLabelText(/favoritado/i);
    expect(favoriteCheck).toBeInTheDocument();
    userEvent.click(favoriteCheck);

    const favoriteIcon = screen.getByAltText(/is marked/i);
    expect(favoriteIcon.src).toBe('http://localhost/star-icon.svg');
    expect(favoriteIcon.alt).toBe('Pikachu is marked as favorite');
  });
});
