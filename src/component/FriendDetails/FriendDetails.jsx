import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend=useLoaderData();
    console.log(friend)
    return (
        <div>
            <h1>everything know in that page</h1>
            <h1>{friend.name}</h1>
            <p>phone:{friend.phone}</p>
        </div>
    );
};

export default FriendDetails;