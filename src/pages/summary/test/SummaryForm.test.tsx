import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

test('checkbox is unchecked by default', () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', { name: 'I agree to Terms and Conditions' });
  expect(checkbox).not.toBeChecked();
});

test('checkbox is enables/disable button', async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const checkbox = screen.getByRole('checkbox', { name: 'I agree to Terms and Conditions' });
  const button = screen.getByRole('button', { name: 'Confirm order' });

  expect(button).toBeDisabled();
  await user.click(checkbox);
  expect(button).toBeEnabled();
  await user.click(checkbox);
  expect(button).toBeDisabled();
});

it('popover responds to hover', async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  // popover start out hidden
  const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
  expect(nullPopover).not.toBeInTheDocument();

  // popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // popover disappears when we mouse out
  await user.unhover(termsAndConditions);
  const nullPopoverAgain = screen.queryByText(/no ice cream will actually be delivered/i);
  expect(nullPopoverAgain).not.toBeInTheDocument();
});
