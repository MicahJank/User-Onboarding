import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form.js';
import List from './components/List.js';

function App() {
  const [users, setUsers] = useState([]);

  return (
    <div className="App">
      <h1>Awesome Form</h1>
      <Form users={users} setUsers={setUsers} />
      <List users={users} />
    </div>
  );
}

export default App;
