import React, { useRef, useState } from "react";
import Bg from '../assets/homebg.png';
import './style.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Lazy, Pagination} from "swiper";
import styled from "styled-components";

const Back = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.5;
    position: absolute;

`

const BackImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
`

const Text = styled.p`
    position: relative;
    background: transparent;
    overflow: auto;
    z-index: 2;
`

export default function Flyer() {
  return (
    <>
    <Swiper
    style={{
        width: '550px',
        height: '250px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}

      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      lazy={true}
      pagination={{
        clickable: true,
      }}
      
      modules={[Autoplay, Lazy, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className="slide">
        <Back>
          <BackImage href={Bg}/>
        </Back>
        <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nam,
            vel maiores id architecto ducimus alias dolorum illo quas neque nulla quae placeat.
            Labore recusandae quos nam nulla nemo unde.
        </Text>
      </SwiperSlide>
      <SwiperSlide className="slide">
      <Back>
          <BackImage href={Bg}/>
      </Back>
        <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nam,
            vel maiores id architecto ducimus alias dolorum illo quas neque nulla quae placeat.
        </Text>
      </SwiperSlide>
      <SwiperSlide className="slide">
      <Back>
          <BackImage href={Bg}/>
      </Back>
        <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nam,
        </Text>
      </SwiperSlide>
      <SwiperSlide className="slide">
      <Back>
        <BackImage href={Bg}/> 
      </Back>
        <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nam,
            vel maiores id architecto ducimus 
        </Text>
      </SwiperSlide>
      <SwiperSlide className="slide">
      <Back>
        <BackImage href={Bg}/>
      </Back>
        <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </Text>
      </SwiperSlide>
    </Swiper>
  </>
  );
}
