import React, { useState } from 'react'
import { useEffect } from 'react';
import UserCard from '../ListItem/UserCard';
// Using async - await syntax:-(in this we use async nd await)[.then is not there]

export default function HttpDemo1() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        let url = 'https://jsonplaceholder.typicode.com/users';
        let response = await fetch(url);
        let users = await response.json();
        console.log(users);
        setUsers(users)
    }

    useEffect(() => {
        fetchUsers()
    },[]);

    return <>
        <h2 className='text-center'>Fetch Users data </h2>
        <div className='container'>
            <div className='row'>
                {users.map(user => {
                    return <UserCard user={user} />
                })}
                    </div>
        </div>
    </>
}