import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import User from './User.js';



const UsersContainer = styled.div`
 
    margin-top: 20px;
`;

const Users = ( { users, displayedUsers, setUsers } ) => {

  
    if(!displayedUsers.length) {
        return (
            <h3>No registered users.</h3>
        );
    }

    // deleteUser is a function that will be passed down into the user.js component and be used with the delete button on the user card.
    // in order to changed the displayedUsers array i have passed down the setUser state function from app.js and use it here with the new array i create by filtering out
    // any user that has the same id as the passed in user. The passed in user is specified in the user.js component.
    // this part gets tricky because i DO NOT want to filter over the displayedUsers...i need
    // to filter over the users that are actually in the database...NOT just the ones that are displayed
    // because sometimes what is displayed is only users that have been searched
    const deleteUser = user => {
       const deletedUserArray = users.filter((userInList) => {
            return userInList.id !== user.id;
        })

        setUsers(deletedUserArray);
    };

    return (
        <UsersContainer>
            {displayedUsers.map((user) => {
                return <User userInfo={user} key={user.id} deleteFunction={deleteUser} />
            })}
        </UsersContainer>
    );
};

export default Users;