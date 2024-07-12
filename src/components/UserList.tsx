import { useEffect, useState } from 'react';
import UserItem, { User } from './UserItem';

function UserList(): JSX.Element {
  const [data, setData] = useState<User[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>List Data</h1>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {data.map((item) => (
          <UserItem key={item.id} user={item} />
        ))}
      </ul>
    </div>
  );
}

export default UserList;