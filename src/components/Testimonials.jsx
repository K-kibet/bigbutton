import React, { useEffect } from 'react';

const Testimonials = () => {

    let slideIndex = 0;

    function showSlides() {
        let i;
        let slides = document.getElementsByClassName("testimonial");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "flex";
        setTimeout(showSlides, 5000); // Change image every 2 seconds
    }

    useEffect(() => {
        showSlides();
    }, []);

    return (

        <div className='testimonials'>
            <h2 className='title'>What clients say</h2>
            <div className="wrapper">

                <div className='testimonial fade'>
                    <img 
                    src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt=""/>
                    <div className='content'>
                            <h5 id='name'>Kibet korir</h5>
                            <h1 >Project Manager</h1>
                            <p>
                                “ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                                impedit quo minus id quod maxime placeat ”
                            </p>
                    </div>
                </div>

                <div className='testimonial fade'>
                    <img 
                    src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt=""/>
                    <div className='content'>
                        <h5 id='name'>Ronne Galle</h5>
                        <h1 >Project Manager</h1>
                        <p>
                            “ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                            impedit quo minus id quod maxime placeat ”
                        </p>
                    </div>
                </div>

                <div className='testimonial fade'>
                    <img 
                    src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt=""/>
                    <div className='content'>
                        <h5 id='name'>Ronne Galle</h5>
                        <h1 >Project Manager</h1>
                        <p>
                            “ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                            impedit quo minus id quod maxime placeat ”
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Testimonials;

