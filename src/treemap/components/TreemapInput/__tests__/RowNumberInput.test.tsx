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

import { RowNumberInput } from '../RowNumberInput';


const labelText = 'Row Number';

describe('<DataInput />', () => {
  it('renders the component', () => {
    render(
      <RowNumberInput max={10} />,
    );

    const inputElement = screen.getAllByText(labelText);
    expect(inputElement).toHaveLength(2);
    expect(inputElement[0]).toBeInTheDocument();
  });

  it('emits data when valid', async () => {
    const handler = jest.fn();
    render(
      <RowNumberInput max={10} onChange={handler} />,
    );

    act(() => {
      user.click(screen.getByLabelText(labelText));
      user.type(screen.getByLabelText(labelText), '2');
    });

    await waitFor(() => {
      expect(handler).toBeCalledTimes(1);
      expect(handler).toHaveBeenNthCalledWith(1, 2);
    });
  });
});
