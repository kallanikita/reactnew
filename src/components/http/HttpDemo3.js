import React, { useState } from 'react'
import { useEffect } from 'react';
import UserCard from '../ListItem/UserCard';
import client from './client';
import loggerHOC from '../HOC/loggerHOC';

function HttpDemo3() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchUsers = async () => {
        let response = await client.get('/users');
        setUsers(response.data);
        setIsLoading(false);
        console.log(users)
    }
    const fetchComments = async () => {
        let response = await client.get('/comments');
        console.log(response.data);
    }
    const fetchPhotos = async () => {
        let response = await client.get('/photos');
        console.log(response.data);
    }
    useEffect(() => {
        setIsLoading(true);
        fetchUsers()
        fetchComments();
        fetchPhotos();
    },[]);

    return <>
        <h2 className='text-center'>Fetch Users data </h2>
        <div className='container'>
            <div className='row'>
                
                    {
                        isLoading ?
                        // <h1>Loading...</h1>
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        :
                            users.map(user => {
                                return <UserCard user={user} key={user.id} />
                            })
                    }
                    </div>
        </div>
    </>
}
export default HttpDemo3;
// export default loggerHOC(HttpDemo3);