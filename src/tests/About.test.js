import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

describe('Testa o componente About', () => {
  it('Testa se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);

    const aboutText = screen.getByText(/simulates a pokédex/i);
    expect(aboutText).toBeInTheDocument();
  });

  it('Testa se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);

    const titleAbout = screen.getByRole('heading', { level: 2, name: /about pokédex/i });
    expect(titleAbout).toBeInTheDocument();
  });

  it('Testa se a página contém dois parágrafos com o texto sobre a Pokedex', () => {
    renderWithRouter(<About />);

    const aboutText = screen.getAllByText(/pokémons/i);
    console.log(aboutText);
    expect(aboutText.length).toBe(2);
  });

  it('Testa se a página contém a imagem de uma Pokedéx', () => {
    renderWithRouter(<About />);

    const imgPokedex = screen.getByRole('img');
    expect(imgPokedex.src).toBe('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
