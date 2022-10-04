import React from 'react';
import Blogs from '../components/Blogs';
import FeaturedProducts from '../components/FeaturedProducts';
import Flyer from '../components/Flyer';
import Testimonials from '../components/Testimonials';


const Home = () => {
    return (
        <div className="home">
            <Flyer />
            <FeaturedProducts />
            <Testimonials />
            <Blogs />
        </div >
    );
}

export default Home;
