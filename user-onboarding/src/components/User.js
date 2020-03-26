import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPortrait, faTimes } from '@fortawesome/free-solid-svg-icons';

import styled from 'styled-components'; 


const UserCard = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 15px;
    background-color: #F5F6F8;
    box-shadow: -4px 5px 38px -14px rgba(0,0,0,1);
    border-radius: 10px;

    .img-container {
        border-right: 5px solid #FFF;
    }

    .img-circle {
        padding: 30px 50px;
        background-color: #FFF;
        border-radius: 50%;
        margin: 50px;
        

        .img {
            font-size: 4rem;
            color: #E7EAEF;
        }
    }

    .user-info {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 250px;
        width: 350px;
        flex-direction: column;
        border-radius: 10% 10px 10px 30%;

    }

    .delete-icon {
        border: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 2rem;
        align-self: flex-start;
        overflow: hidden;
        height: 34px;
        padding: 0 10px 0 20px;
        border-radius: 10px 10px 0 10px;
        color: rgb(217, 220, 224);
        background-color: #F5F6F8;
        cursor: pointer;
        transition: color 0.2s;

        :focus {
            outline: none;
        }

        :hover {
            color: #FF4136;

            transition: color: 0.2s;
        }
    }
`;


const User = ( { userInfo, deleteFunction } ) => {

    return (
        <UserCard>
            <div className='img-container'>
                <div className='img-circle'>
                    <div className='img'>
                        <FontAwesomeIcon icon={faPortrait} />
                    </div>
                </div>
            </div>
            
            <div className='user-info'>
                <h2>{userInfo.name}</h2>
                <h3>{userInfo.email}</h3>
                <h3>{userInfo.dropdown}</h3>
            </div>

            <button onClick={() => { deleteFunction(userInfo) }} className='delete-icon'>
                <FontAwesomeIcon icon={faTimes} />
           </button>
        </UserCard>
    );
};

export default User;