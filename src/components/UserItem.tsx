
export interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  user: User
}

function UserItem(props: Props): JSX.Element {
  const { user } = props

  return (
    <li
      style={{
        marginBottom: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '5px',
        padding: '10px',
      }}
    >
      <strong>ID:</strong> {user.id}
      <br />
      <strong>Name:</strong> {user.name}
      <br />
      <strong>Email:</strong> {user.email}
    </li>
  );
}

export default UserItem;