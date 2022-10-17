import React, { useEffect, useState } from  'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';

import Coongames from "../assets/coongames.png"
import Bigplay from "../assets/bigplay.png";
import Bigshare from "../assets/share.png";
import Editor from "../assets/Editor.png";

const slides = [
    {
        id: 1,
        img: Coongames,
        title: "COONGAMES",
        description: "Relax and play platform games like famous Nokia snake game right in your browser.",
        link: ""
    },
    {
        id: 1,
        img: Editor,
        title: "DEVEDITOR",
        description: "A free full-featured online code editor for HTML, CSS and JAVASCRIPT.",
        link: ""
    },
    {
        id: 1,
        img: Bigplay,
        title: "BIGPLAY",
        description: "Stream and  enjoy playing video content only on bigplay.",
        link: ""
    },
    {
        id: 1,
        img: Bigshare,
        title: "BIGSHARE",
        description: "Manage all your file and share with friends, family and the world from one place.",
        link: ""
    }

    
]

const products = [
    {
        id: 1,
        img: Share,
        title: "",
        description: "",
        link: ""
    },
    {
        id: 1,
        img: Upcider,
        title: "",
        description: "",
        link: ""
    },
    {
        id: 1,
        img: Editor,
        title: "",
        description: "",
        link: ""
    }
]

const testimonials = [
    {
        id: 1,
        img: Share,
        name: "",
        title: "",
        description: ""
    },
    {
        id: 1,
        img: Upcider,
        name: "",
        title: "",
        description: ""
    },
    {
        id: 1,
        img: Editor,
        name: "",
        title: "",
        description: ""
    }
]


const Home = ({data}) => {
    const [popular, setPopular] = useState([]);

    useEffect(() => {
        setPopular(data);
        console.log(popular)
        
    }, []) 
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0)
        }
    }


    return (
        <div className="home page">
            <div className="slider">

                <div className="arrow"  onClick={() => handleClick("left")}>
                   <ArrowLeftOutlined />
                </div>

                   <div className="wrapper" style={{transform: `translateX(${slideIndex * -100}vw)`}}>
                    {
                        slides && slides.map(slide => {
                            return (
                                <div className="slider">
                                    <div className="image-container">
                                        <img src={slide.img} alt="" />
                                    </div>
                                    <div className="info">
                                        <h1>{slide.title}</h1>
                                        <p>{slide.description}</p>
                                       <button>Visit Now</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                   </div>

                <div className="arrow" onClick={() => handleClick("right")}>
                   <ArrowRightOutlined />
                </div>
            </div>

            <div className="featuredproducts">
                {
                    products && products.map(product => {
                        return (
                            <section>
                                <div className='image-container'>
                                    <img src={product.img} alt="file-share"/>
                                </div>
                                <div className='wrapper' >
                                    <a href='#'>
                                        {product.title}
                                    </a>
                                    <p>
                                        {product.description}
                                    </p>
                                    <a href={product.link} className="link">
                                        Learn more &raquo;
                                    </a>
                                </div>
                            </section>
                        )
                    })
                }
            </div>
        
            <div className='testimonials'>
                <h2 className='title'>What clients say</h2>
                <div className="wrapper">
                    {
                        testimonials && testimonials.map(testimonial => {
                            return (
                                <div className='testimonial theme'>
                                    <img src={testimonial.img} alt=""/>
                                    <div className='content'>
                                        <h5 id='name'>{testimonial.name}</h5>
                                        <h1 >{testimonial.title}</h1>
                                        <p>
                                            {testimonial.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='popularposts'>
                <h1>Popular Posts 🔥</h1>
                <div className='wrapper'>
                    {
                        popular && popular.map((post) => {
                            return (
                                <div className='post theme' key={post.title}>
                                    <div className='image-container'>
                                        <img src={post.image_url} alt=""/>
                                    </div>
                                    <div className='content'>
                                        <h3>
                                           <a className='link' href="#">{post.title}</a>
                                        </h3>
                                        <p>
                                           {post.description}
                                        </p>
                                        <span>
                                           <i class="fa fa-clock-o"></i>{new Date(post.pubDate).toDateString()}
                                        </span>
                                       <a href={post.link} className='readmore'>READ MORE</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> 
            </div>

        </div >
    );
}

export default Home;
