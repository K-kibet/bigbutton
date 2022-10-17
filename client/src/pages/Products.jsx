import React, { useEffect, useState } from "react";

import Bigchat from "../assets/bigchat.png";
import Bigplay from "../assets/bigplay.png"; 
import Bigshare from "../assets/share.png"

import Coinblock from "../assets/coinblock.png";
import Editor from "../assets/Editor.png";
import Upcider from "../assets/upcider.png";
import Devquiz from "../assets/devquiz.png";
import Design from "../assets/design.png";
import Dev from "../assets/dev.png";

import Adblocker from "../assets/chrome-adblocker.png"

const Data = [
    {
        category: "productivity",
        products: [
            {
                id:1,
                name: "Bigchat",
                title: "Upcider for freelancers.",
                img: Bigchat,
                desc: "If you are a freelacer then we got your back Lorem ipsum dolor sit,If you are a freelacer then we got your back Lorem ipsum dolor sit, amet consectetur adipisicing elit..Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                link: "#",
            },

            {
                id:2,
                name: "Bigplay",
                title: "Upcider for freelancers",
                img: Bigplay,
                desc: "If you are a freelacer then we got your back Lorem ipsum dolor sit, amet consectetur adipisicing elit..Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.If you are a freelacer then we got your back. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                link: "#",
            },

            {
                id:3,
                name: "Bigshare",
                title: "Upcider for freelancers",
                img: Bigshare,
                desc: "If you are a freelacer then we got your back Lorem ipsum dolor sit, amet consectetur adipisicing elit..Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.If you are a freelacer then we got your back. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                link: "#",
            },

            {
                id:4,
                name: "Upcider",
                title: "Upcider for freelancers",
                img: Upcider,
                desc: "We bring you a freelancer platform where we connect skills with market.",
                link: "#",
            },

            {
                id:5,
                name: "Coinblock",
                title: "Upcider for freelancers",
                img: Coinblock,
                desc: "If you are a freelacer then we got your back Lorem ipsum dolor sit, amet consectetur adipisicing elit..Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.If you are a freelacer then we got your back.",
                link: "#",
            },

            {
                id:6,
                name: 'Upcider',
                title: "Upcider for freelancers",
                img: Design,
                desc: "If you are a freelacer then we got your back Lorem ipsum dolor sit, amet consectetur adipisicing elit..Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.If you are a freelacer then we got your back.",
                link: "#",
            },
        ]
    },

    {
        category: "developer-tools",
        products: [
            {
                id:1,
                name: "Devediror",
                title: "Upcider for freelancers",
                img: Editor,
                desc: "If you are a freelacer then we got your back.If you are a freelacer then we got your back Lorem ipsum dolor sit, amet consectetur adipisicing elit..Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                link: "#",
            },
            {
                id:2,
                name: "Devquiz",
                title: "Upcider for freelancers",
                img: Devquiz,
                desc: "If you are a freelacer then we got your back Lorem ipsum dolor sit, amet consectetur adipisicing elit..Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                link: "#",
            },
            {
                id:3,
                name: "Developer profile",
                title: "Upcider for freelancers",
                img: Dev,
                desc: "If you are a freelacer If you are a freelacer then we got your back Lorem ipsum dolor sit, amet consectetur adipisicing elit..Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
                link: "#",
            }
        ]
    },

    {
        category: "browser-tools",
        products: [
            {
                id:1,
                name: 'Upcider',
                title: "Upcider for freelancers",
                img: "../assets/chrome-adblocker.png",
                desc: "If you are a freelacer then we got your back.",
                link: "#",
            },
            {
                id:2,
                name: 'Upcider',
                title: "Upcider for freelancers",
                img: "../assets/editor.png",
                desc: "If you are a freelacer then we got your back.",
                link: "#",
            },
            {
                id:3,
                name: 'Upcider',
                title: "Upcider for freelancers",
                img: "../assets/upcider.png",
                desc: "If you are a freelacer then we got your back.",
                link: "#",
            },
            {
                id:4,
                name: 'Upcider',
                title: "Upcider for freelancers",
                img: "../assets/upcider.png",
                desc: "If you are a freelacer then we got your back.",
                link: "#",
            },
            {
                id:5,
                name: 'Upcider',
                title: "Upcider for freelancers",
                img: "../assets/upcider.png",
                desc: "If you are a freelacer then we got your back.",
                link: "#",
            },
            {
                id:6,
                name: 'Upcider',
                title: "Upcider for freelancers",
                img: "../assets/upcider.png",
                desc: "If you are a freelacer then we got your back.",
                link: "#",
            },
            {
                id:7,
                name: 'Upcider',
                title: "Upcider for freelancers",
                img: "../assets/upcider.png",
                desc: "If you are a freelacer then we got your back.",
                link: "#",
            },
            {
                id:8,
                name: 'Upcider',
                title: "Upcider for freelancers",
                img: "../assets/upcider.png",
                desc: "If you are a freelacer then we got your back.",
                link: "#",
            },
        ]
    },
]

const Products = () => {
    console.log(Data)
    return (
        <div className='products page'>
            <div className="banner">
                <section>
                    <img src={Design} alt="" />
                    <h2>
                      IMAGEE
                    </h2>
                </section>
                <section>
                    <p>
                        Take advantage off all features from our image editor to edit your images to fit your needs.
                    </p>

                    <button>
                        Learn more
                    </button>
                </section>
            </div>

            <h1>Productivity</h1>

            <div className='section' >
                {
                    Data[0].products.map(item => {
                        return <div className="card" id={item.id}>
                            <div className="image-container">
                                <img src={`${item.img}`} alt="" />
                            </div>
        
                            <div className="content">
                                <h1>{item.title}</h1>
                                <p>{item.desc}</p>
                            </div>
                            <button>Learn more &raquo;</button>
                        </div>
                        
                    })
                }

            </div>

            <h1>Developer</h1>

            <div className='wrapper'>
                {
                    Data[1].products.map(item => {
                        return  <div className='item' id={item.id}>
                            <div className='image-container'>
                                <img src={item.img} alt=''/>
                            </div>
                            <div className='content'>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                    </div>
                </div>
                    })
                }
            </div>
        </div>
    );
}

export default Products;
