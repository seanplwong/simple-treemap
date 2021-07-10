/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';

import { Treemap } from '../Treemap';


describe('<Treemap />', () => {
  it('renders the component', () => {
    render(
      <Treemap />,
    );

    expect(screen.getByText('Result')).toBeInTheDocument();
  });
});
