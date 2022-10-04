import React from 'react';
import Product from '../components/Product';

const Products = () => {
    return (
        <div className='products'>
            <div className="banner">
                <section>
                    <img src="" alt="" />
                    <h2>
                      Adobe Stock
                    </h2>
                </section>
                <section>
                    <p>
                    Grab yourself 10 free images from Adobe Stock in a 
                    30-day free trial plan and find perfect image, 
                    that will help you with your new project.
                    </p>

                    <button>
                        Learn more
                    </button>
                </section>
            </div>
            <div className='section' >
                <h1>
                    Loud & Clear
                </h1>
                <h2 tt={40}>
                    People Aren't Hearing All the Music
                </h2>
                <p >
                   Lorem ipsum dolor sit amet consectetur adipisicing elit.
                   Dicta repudiandae laboriosam quia, error tempore porro ducimus voluptate laborum nostrum iure.
                </p>
            </div>
            <h1>Productivity</h1>
            <div className='wrapper'>
                <div className='item'>
                    <div className='image-container'>
                       <img src='' alt=''/>
                    </div>
                    <div className='content'>
                        <h2>Consectetur sequi porro ab necessitatibus doloremque.</h2>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Ex eligendi consectetur ut enim quasi possimus ipsa dolorem recusandae earum, 
                        veritatis natus impedit minus placeat. Quisquam at assumenda neque molestiae reprehenderit.
                        </p>
                    </div>
                </div>
            </div>

            <h1>Developer tools</h1>
            <div className="card-wrapper">
                <Product />
                <Product />
                <Product />
            </div>

            <h1>Browser tools</h1>
            <div className="card-wrapper">
                <Product />
                <Product />
                <Product />
            </div>

            <h1>Communication</h1>
            <div className="card-wrapper">
                <Product />
                <Product />
                <Product />
            </div>

            <h1>Marketplace</h1>
            <div className="card-wrapper">
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    );
}

export default Products;
