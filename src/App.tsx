import { useState } from 'react';
import './App.css';
import UserList from './components/UserList';

function App() {
  const [show, setShow] = useState(false)

  return (
    <div className="App">
      {
        show ? <UserList /> : <button onClick={() => setShow(true)} style={{ marginTop: 20 }}>Get users</button>
      }
    </div>
  );
}

export default App;
