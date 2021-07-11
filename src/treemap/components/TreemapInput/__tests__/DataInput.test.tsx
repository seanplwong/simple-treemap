/**
 * @jest-environment jsdom
 */
import {
  act,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import user from '@testing-library/user-event';

import { DataInput } from '../DataInput';


describe('<DataInput />', () => {
  it('renders the component', () => {
    const { container } = render(
      <DataInput />,
    );

    const dataElement = screen.getAllByText('Data');
    expect(dataElement).toHaveLength(2);
    expect(dataElement[0]).toBeInTheDocument();
    expect(container.querySelector('textarea')).toBeInTheDocument();
  });

  it('emits data when valid', async () => {
    const handler = jest.fn();
    const { container } = render(
      <DataInput onChange={handler} />,
    );

    const textarea = container.querySelector('textarea');
    expect(textarea).toBeDefined();
    expect(textarea).toBeInTheDocument();
    act(() => {
      user.click(screen.getByLabelText('Data'));
      user.type(screen.getByLabelText('Data'), '[[{{ "name": "A", "weight": 3, "value": -0.02 }]');
    });

    await waitFor(() => {
      expect(handler).toBeCalledTimes(1);
      expect(handler).toHaveBeenNthCalledWith(1, [{ name: 'A', weight: 3, value: -0.02 }]);
    });
  });
});
