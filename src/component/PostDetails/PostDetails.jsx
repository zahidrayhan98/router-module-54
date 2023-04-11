import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post=useLoaderData();
    const {id,title,body}=post
    // console.log(post)
    const navigation =useNavigate()
    const handleBack=()=>{
        navigation(-1)

    }
    return (
        <div>
            <h1>post details  information:{id} </h1>
            <h4>{title}</h4>
            <h4>{body}</h4>
            <button onClick={handleBack} >Go back</button>

        </div>
    );
};

export default PostDetails;