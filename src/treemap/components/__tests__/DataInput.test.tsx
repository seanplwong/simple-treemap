/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';

import { DataInput } from '../DataInput';


describe('<DataInput />', () => {
  it('renders the component', () => {
    render(
      <DataInput />,
    );

    expect(screen.getByText('Data')).toBeInTheDocument();
  });
});
