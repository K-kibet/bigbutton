import React, { useEffect } from 'react';
import Axios from 'axios';
import { useState } from 'react';
import Post from '../components/Post';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchAllPosts = async () => {
            try{
                const res = await Axios.get('http://localhost:8800/blogs')
                setBlogs(res.data);
            } catch (error) {
                console.log(error)
            }
        }

        fetchAllPosts();
    }, [])
    return (
        <div className='blogs'>
            <div className="banner">
                <h1>READ FROM HERE</h1>
            </div>
            <div className="wrapper">
                <div className="posts-container">
                    <Post />
                </div>
            </div>
            
        </div>
    );
}

export default Blogs;
