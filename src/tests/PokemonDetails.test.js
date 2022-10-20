import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente Pokemon Details', () => {
  it('Testa se as informações detalhadas do pokémon selecionado são mostradas', () => {
    renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', { name: /details/i });
    userEvent.click(detailsLink);

    const titleDetails = screen.getByRole('heading', { name: /details/i });
    expect(titleDetails).toBeInTheDocument();

    const summaryDetails = screen.getByRole('heading', { name: /summary/i });
    expect(summaryDetails).toBeInTheDocument();

    const summaryText = screen.getByText(/hard berries/i);
    expect(summaryText).toBeInTheDocument();

    const buttonNext = screen.queryByRole('button', { name: /próximo/i });
    expect(buttonNext).toBeNull();
  });

  it('Testa se existe na página uma seção com os mapas das localizações', () => {
    renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', { name: /details/i });
    userEvent.click(detailsLink);

    const locationsTitle = screen.getByRole('heading', { name: /game locations/i });
    expect(locationsTitle).toBeInTheDocument();

    const locationsImg = screen.getAllByRole('img', { name: 'Pikachu location' });
    expect(locationsImg[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(locationsImg[0].alt).toBe('Pikachu location');

    const locationTitle = screen.getByText(/kanto viridian/i);
    expect(locationTitle).toBeInTheDocument();

    const locationTitle2 = screen.getByText(/kanto power/i);
    expect(locationTitle2).toBeInTheDocument();
  });

  it('Testa se o usuário pode favoritar um pokémon na página de detalhes', () => {
    renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', { name: /details/i });
    userEvent.click(detailsLink);

    const favoriteSelect = screen.getByLabelText(/favoritado/i);
    expect(favoriteSelect).toBeInTheDocument();
    userEvent.click(favoriteSelect);

    const favoriteIcon = screen.getByAltText(/is marked/i);
    expect(favoriteIcon).toBeInTheDocument();
  });

  it('Testa se ao clicar novamente no checkbox, o pokemón não é mais favoritado', () => {
    renderWithRouter(<App />);

    const detailsLink = screen.getByRole('link', { name: /details/i });
    userEvent.click(detailsLink);

    const favoriteSelect = screen.getByLabelText(/favoritado/i);
    userEvent.click(favoriteSelect);

    const favoriteIcon = screen.queryByAltText(/is marked/i);
    expect(favoriteIcon).toBeNull();
  });
});
