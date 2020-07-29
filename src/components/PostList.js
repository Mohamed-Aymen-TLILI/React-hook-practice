import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const PostList = () => {

    const [post, setPost]= useState([]);
    const [counter, setCounter]= useState(0);
    const [countDisabled, setCountDisabled]= useState(false);


    useEffect(() => {
        
        Axios.get('https://jsonplaceholder.typicode.com/posts')
             .then(result => {
                 console.log(result);
                 setPost(result.data);
            
             })

    }, [])

    useEffect(() => {
        console.log('counter usseEffect');
        if (counter === 3) {
            setCountDisabled(true);
        }
        
        
    }, [counter])

    const resetCounter = () => {
        setCounter(0);
        setCountDisabled(false);
    }


    return ( 
    <>
    <button 
    onClick= {e=> setCounter(counter + 1)}
    disabled={countDisabled}
    >{counter}</button>
    <button onClick={resetCounter}>reset</button>
    <h1> Post List </h1> 
    {

    post.length > 0 ?  (post.map(p => <div key={p.id}>{p.title}</div>)) : (<h3> Loading ...</h3>)

    }
    </>
    );
}
 
export default PostList;