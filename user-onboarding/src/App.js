import React, { useState, useEffect } from 'react';

import AppRouter from './AppRouter.js';

import styled from 'styled-components';

import BackgroundImg from './imgs/desert.jpg';

import './App.css';

const Container = styled.div`
  background-color: #1D1E22;
  height: 100%;

  .background {
    background-image: url(${BackgroundImg});
    filter: blur(8px);
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .main {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;

    .navigation {
      position: absolute;
      top: 25%;
      display: flex;
      justify-content: space-between;
      width: 170px;
      font-size: 1.3rem;

      a {
        text-decoration: none;
        color: #00476b;
      }

      .active {
        text-decoration: underline;
        color: #0088CC;
      }
    }

    .forms {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      position: absolute;
      top: 28%;
    }
  }

`;

function App() {

  const [users, setUsers] = useState([]);

  const [displayedUsers, setDisplayedUsers] = useState([])

  useEffect(() => {

    setDisplayedUsers(users);

  }, [users]);


  const addUser = user => {
    setUsers([...users, user]);
  };
 
  const createSearchedUsers = (search) => {
    if(search) {
      console.log(search)
      const filteredUsers = users.filter(user => {
        return user.name === search;
      });
      setDisplayedUsers(filteredUsers);
    } else {
      setDisplayedUsers(users);
    }
  };

  return (
    <div className="App">
      <Container>
        <div className='background'></div>
        <div className='main'>
          <AppRouter users={users} setUsers={setUsers} displayedUsers={displayedUsers} addUser={addUser} createSearchedUsers={createSearchedUsers}/>
        </div>
      </Container>
    </div>
  );
}

export default App;
