import React, { useState, useEffect } from 'react';

import { Route, NavLink } from 'react-router-dom';

import UserForm from './components/UserForm.js';
import Users from './components/Users.js';
import SearchForm from './components/SearchForm.js';

// props are the state and fucntions that the components need
const AppRouter = ( { users, setUsers, displayedUsers, addUser, createSearchedUsers } ) => {

    return (
        <>
        <div className='navigation'>
            <NavLink exact to={'/'}>Register</NavLink>
            <NavLink to={'/search'}>Search</NavLink>
        </div>
        <div className='forms'>
            <Route exact path={'/'} render={(props) => <UserForm {...props} addUserFunction={addUser} /> } />
            <Route path={'/search'} render={(props) => (
                <>
                <SearchForm {...props} searchFunction={createSearchedUsers} />
                <Users {...props} users={users} displayedUsers={displayedUsers} setUsers={setUsers} />
                </>
                )
            } />
        </div>
        </>
    );
};

export default AppRouter;