import React from 'react';

const Blogs = () => {
    return (
        <div className='blogs'>
            <div className="banner">
                <h1>READ FROM HERE</h1>
            </div>

            <div className="wrapper">
                <div className="posts-container">
                    <div className="post">
                        <div className="image-container">
                            <img src="" alt="" />
                            <a href="#"></a>
                        </div>

                        <div className="content">
                            <div className="h4">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            </div>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, ab. Blanditiis, officia quia minus sit, quam ullam cumque iusto voluptas dolores illo iste ad impedit, quod incidunt provident minima maxime.
                            </p>

                            <span>29 July 2021</span>
                        </div>

                    </div>
                </div>

                <aside>
                    <h1>TAGS</h1>
                    <div className="container">
                        <div className="item">
                            <p>Javascript</p>
                            <span>24</span>
                        </div>
                    </div>
                </aside>
            </div>
            
        </div>
    );
}

export default Blogs;
