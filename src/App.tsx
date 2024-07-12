import { useState } from "react";
import "./App.css";
import UserList from "./components/UserList";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {show ? (
        <UserList />
      ) : (
        <button
          onClick={() => setShow(true)}
          style={{
            marginTop: 20,
            padding: "8px 10px",
            border: "none",
            background: "#000",
            color: "#fff",
            fontSize: 16,
            fontWeight: "bold",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          Show users
        </button>
      )}
    </div>
  );
}

export default App;
