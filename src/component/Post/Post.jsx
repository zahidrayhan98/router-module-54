import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({post}) => {
    const {id,title,body}=post;
    const   navigate =useNavigate();


    const handleNavigate=()=>{
        navigate(`/post/${id}`);

    }
    return (
        <div className='post'>
                <h5>{id}</h5>
                <h4>{title}</h4>
               <Link to={`/post/${id}`}>show details</Link>
               <Link to={`/post/${id}`}><button>post show details</button></Link>
               <button onClick={handleNavigate}>Another button</button>
        </div>
    );
};

export default Post;