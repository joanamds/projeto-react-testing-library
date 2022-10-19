import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testa o componente Pokédex', () => {
  it('Testa se a página tem um título com o texto Encountered Pokémons', () => {
    renderWithRouter(<App />);

    const titlePokedex = screen.getByRole('heading', { level: 2, name: /encountered pokémons/i });
    expect(titlePokedex).toBeInTheDocument();
  });

  it('Testa se é mostrado apenas um pokemon por vez', () => {
    renderWithRouter(<App />);

    const pokemon = screen.getAllByTestId('pokemon-name');
    expect(pokemon.length).toBe(1);
  });

  it('Testa se é exibido o próximo pokémon da lista quando o botão Próximo pokémon é clicado', () => {
    renderWithRouter(<App />);

    const buttonNext = screen.getByRole('button', { name: /próximo pokémon/i });
    expect(buttonNext).toBeInTheDocument();

    userEvent.click(buttonNext);
    const nextPokemon = screen.getByText('Charmander');
    expect(nextPokemon).toBeInTheDocument();

    userEvent.click(buttonNext);
    const nextPokemon2 = screen.getByText('Caterpie');
    expect(nextPokemon2).toBeInTheDocument();

    userEvent.click(buttonNext);
    const nextPokemon3 = screen.getByText('Ekans');
    expect(nextPokemon3).toBeInTheDocument();

    userEvent.click(buttonNext);
    const nextPokemon4 = screen.getByText('Alakazam');
    expect(nextPokemon4).toBeInTheDocument();

    userEvent.click(buttonNext);
    const nextPokemon5 = screen.getByText('Mew');
    expect(nextPokemon5).toBeInTheDocument();

    userEvent.click(buttonNext);
    const nextPokemon6 = screen.getByText('Rapidash');
    expect(nextPokemon6).toBeInTheDocument();

    userEvent.click(buttonNext);
    const nextPokemon7 = screen.getByText('Snorlax');
    expect(nextPokemon7).toBeInTheDocument();

    userEvent.click(buttonNext);
    const nextPokemon8 = screen.getByText('Dragonair');
    expect(nextPokemon8).toBeInTheDocument();

    userEvent.click(buttonNext);
    const nextPokemon9 = screen.getByText('Pikachu');
    expect(nextPokemon9).toBeInTheDocument();
  });

  it('Teste se o Pokedex tem os botões de filtro', () => {
    renderWithRouter(<App />);

    const buttons = screen.getAllByTestId('pokemon-type-button');
    expect(buttons[0]).toHaveTextContent('Electric');
    expect(buttons[1]).toHaveTextContent('Fire');
    expect(buttons[2]).toHaveTextContent('Bug');
    expect(buttons[3]).toHaveTextContent('Poison');
    expect(buttons[4]).toHaveTextContent('Psychic');
    expect(buttons[5]).toHaveTextContent('Normal');
    expect(buttons[6]).toHaveTextContent('Dragon');
  });

  it('Teste se a partir da seleção de um botão de tipo, a Pokedéx circula somente por pokemons daquele tipo', () => {
    renderWithRouter(<App />);

    const buttons = screen.getAllByTestId('pokemon-type-button');
    userEvent.click(buttons[2]);

    const getType = screen.getByTestId('pokemon-type');
    expect(getType).toHaveTextContent('Bug');
    const allButton = screen.getByRole('button', { name: 'All' });
    expect(allButton).toBeInTheDocument();

    userEvent.click(allButton);
    expect(getType).toHaveTextContent('Electric');
  });

  it('Testa se o botão All está sempre visível', () => {
    renderWithRouter(<App />);

    const allButton = screen.getByRole('button', { name: 'All' });
    expect(allButton).toBeInTheDocument();
  });
});
