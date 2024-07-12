import { render, waitFor } from '@testing-library/react';
import UserList from './UserList';

test('renders list users', async () => {
  const { container } = render(<UserList />);

  await waitFor(() => {
    const users = container.querySelectorAll('li')
    expect(users).toHaveLength(10);
  }, {
    timeout: 5000
  });
});
