import React from 'react';
import styled from 'styled-components';
import Blogs from '../components/Blogs';
import FeaturedProducts from '../components/FeaturedProducts';
import Flyer from '../components/Flyer';
import Testimonials from '../components/Testimonials';


const Home = () => {
    return (
        <div className="home">
            <Flyer />
            <FeaturedProducts />
            <hr />
            <Testimonials />
            <Blogs />
        </div >
    );
}

export default Home;
