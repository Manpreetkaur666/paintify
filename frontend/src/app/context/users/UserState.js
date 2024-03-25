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
    console.log(users);
  }

  // ROUTE2: Update user using PUT request 
  const updateUser = async (userId, name, email, role) => {
    const url = `${host}api/auth/update`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, name, email, role })
    });
    const json = await response.json();

    let newUsers = JSON.parse(JSON.stringify(users));

    for (let index = 0; index < newUsers.length; index++) {
      const element = newUsers[index];
      if (element._id === chatId) {
        newUsers[index].name = name;
        newNotes[index].email = email;
        newNotes[index].role = role;
        break;
      }
    }
    setUsers(newUsers);
  }

  // ROUTE3: Register user using POST request 
  const registerUser = async (name, email, role, password) => {
    const url = `${host}api/auth/register`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, role, password })
    });
    const user = await response.json();
    setUsers(users.concat(user));
  }

  return (
    <UserContext.Provider value={{ users, getAllUsers, updateUser, registerUser }}>
      {props.children}
    </UserContext.Provider>)
}

export default UserState
