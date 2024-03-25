'use client'
import React, { useState } from 'react';
import UserContext from './UserContext';

const UserState = (props) => {
    const host = "http://localhost:5000/";
    const [users, setUsers] = useState([]);

    // ROUTE1: Get All Users using GET request
    const getAllUsers = async () => {
        const url = `${host}api/auth/`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const json = await response.json()
        console.log(json);
        setUsers(json);
        console.log(colors);
    }

  return (
    <UserContext.Provider value={{ users, getAllUsers }}>
      {props.children}
    </UserContext.Provider>)
}

export default UserState
