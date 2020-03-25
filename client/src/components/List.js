import React, { useState, useEffect } from 'react';

import User from './User.js';

const List = ({ users }) => {

    return (
        <div>
            {users.map((user) => {
                return <User key={user.id} user={user} />
            })}
        </div>
    )
}

export default List;