import React from 'react';
import './cards.css';

const About = () => {
    return (
        <div class="about container">
          <h1>Contact us</h1>
        <form>
          <input type="text"  placeholder="NAME" value="" required />
          <input type="email"  placeholder="EMAIL" value="" required />
          <textarea placeholder="MESSAGE" required/>
          <button type="submit" >SEND</button>
        </form>


        <div class="card">
          <div class="face face1">
            <div class="content">
               <i class="fab fa-windows"></i>            
              <h3>Windows</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
              <a href="#" type="button">Read More</a>
            </div>
          </div>
       </div>
       
       <div class="card">
          <div class="face face1">
            <div class="content">
         <i class="fab fa-android"></i>               <h3>Android</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
              <a href="#" type="button">Read More</a>
            </div>
          </div>
       </div>
       
       
       <div class="card">
          <div class="face face1">
            <div class="content">
              <i class="fab fa-apple"></i>
               <h3>Apple</h3>
            </div>
          </div>
          <div class="face face2">
            <div class="content">
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus illum perferendis maiores quia molestias vitae fugiat aspernatur alias corporis?</p>
              <a href="#" type="button">Read More</a>
            </div>
          </div>
       </div>
       
     </div>
    );
}

export default About;
