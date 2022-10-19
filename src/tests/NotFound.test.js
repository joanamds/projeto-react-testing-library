import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

describe('Testa o componente Not Found', () => {
  it('Testa se a página tem um título com o texto Page Requested Not Found', () => {
    renderWithRouter(<NotFound />);

    const getTitle = screen.getByRole('heading', { level: 2, name: /not found/i });
    expect(getTitle).toBeInTheDocument();
  });

  it('Testa se a página mostra a imagem esperada', () => {
    renderWithRouter(<NotFound />);

    const imgNotFound = screen.getByRole('img');
    expect(imgNotFound.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
