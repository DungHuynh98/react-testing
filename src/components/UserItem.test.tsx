import { render, screen } from '@testing-library/react';
import UserItem from './UserItem';

test('renders user', () => {
  const user = {
    id: 1,
    name: 'Join',
    email: 'join@gmail.com'
  }

  render(<UserItem user={user} />);
  const email = screen.getByText(/join@gmail.com/i);
  expect(email).toBeInTheDocument();
});
