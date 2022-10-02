import React from 'react';


const Blogs = () => {
    return (
        <div className='popularblogs'>
            <h1>Popular Posts 🔥</h1>
            <div className='wrapper'>
            <div className='post'>
                <div className='image-container'>
                    <img
                    src="https://images.unsplash.com/photo-1596265371388-43edbaadab94?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=301&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=501" alt=""/>
                    <a className='overlayer' href="#"><i class="fa fa-link"></i></a>
                </div>
                <div className='content'>
                    <h3>
                        <a className='link' href="#">Lorem ipsum dolor sit amet</a>
                    </h3>
                    <p>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur cumque dolorum, ex incidunt ipsa laudantium necessitatibus neque quae tempora......
                    </p>
                    <span>
                        <i class="fa fa-clock-o"></i>Out 27, 2019
                    </span>
                       <a href='#' className='readmore'>READ MORE</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;
