import React, { useState } from 'react'
import { useEffect } from 'react';
import UserCard from '../ListItem/UserCard';
import axios from 'axios';
// Using axios library:-- (with async nd await axios.get is used)[we hav to install axios-->npm i axios]

export default function HttpDemo2() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        let url = 'https://jsonplaceholder.typicode.com/users';
        let response = await axios.get(url);
        console.log(response.data);
        setUsers(response.data)
    }
     useEffect(() => {
        fetchUsers()
    },[]);

    return <>
        <h2 className='text-center'>Fetch Users data </h2>
        <div className='container'>
            <div className='row'>
                {users.map(user => {
                    return <UserCard user={user} key = {user.id}  />
    
                })}
            </div>
        </div>
    </>
}