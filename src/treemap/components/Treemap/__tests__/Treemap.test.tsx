/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';

import { Treemap } from '../Treemap';


describe('<Treemap />', () => {
  it('renders the component', () => {
    render(
      <Treemap data={[]} />,
    );

    expect(screen.getByText('Result')).toBeInTheDocument();
  });

  it('renders 4 box for data of length 4', () => {
    const { container } = render(
      <Treemap
        data={[
          { name: 'A', weight: 6, value: 0.01 },
          { name: 'B', weight: 3, value: 0.021 },
          { name: 'C', weight: 1, value: 0.0211 },
          { name: 'D', weight: 1, value: 0.02122 },
        ]}
      />,
    );

    const nodeList = container.querySelectorAll('.MuiGrid-root.makeStyles-container-4 > div.MuiGrid-root > div > div');
    const elements = Array.from(nodeList);

    const rowList = container.querySelectorAll('.MuiGrid-root.makeStyles-container-4 > div.MuiGrid-root > div');
    const rows = Array.from(rowList);

    expect(elements).toHaveLength(4);
    expect(rows).toHaveLength(2);
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('1%')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
    expect(screen.getByText('2.1%')).toBeInTheDocument();
    expect(screen.getByText('C')).toBeInTheDocument();
    expect(screen.getByText('2.11%')).toBeInTheDocument();
    expect(screen.getByText('D')).toBeInTheDocument();
    expect(screen.getByText('2.12%')).toBeInTheDocument();
  });
});
