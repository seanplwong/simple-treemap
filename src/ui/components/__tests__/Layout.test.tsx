/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';

import { Layout } from '../Layout';


describe('<Layout />', () => {
  it('renders the component', () => {
    render(
      <Layout>Child</Layout>,
    );

    expect(screen.getByText('Child')).toBeInTheDocument();
  });
});
