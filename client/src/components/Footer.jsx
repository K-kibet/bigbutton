import { Facebook, Instagram, LinkedIn, Pinterest, Twitter, YouTube } from '@mui/icons-material';
import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social'>
                <h2>Follow us</h2>
                <div className='wrapper'>
                    <a href='#'><Facebook /></a>
                    <a href='#'><Instagram /></a>
                    <a href='#'><Twitter /></a>
                    <a href='#'><YouTube /></a>
                    <a href='#'><LinkedIn /></a>
                    <a href='#'><Pinterest /></a>
                </div >
                
            </div>

            <div className='section-wrapper'>
                <section>
                    <h2>Resources</h2>
                    <div className='items-container'>
                        <a>Contact us</a>
                        <a>Blog</a>
                        <a>Help center</a>
                        <a>our services</a>
                        <a>Store</a>
                    </div>
                </section>

                <section>
                    <h2>Featured</h2>
                    <div className='items-container'>
                        <a>Bigplay</a>
                        <a>Coongames</a>
                        <a>Bigshare</a>
                        <a>Photomore</a>
                        <a>Workfit</a>
                    </div>
                </section>

                <section>
                    <h2>Developers</h2>
                    <div className='items-container'>
                        <a>Codespear</a>
                        <a>Dev Editor</a>
                    </div>
                </section>
            </div>

            <hr />

            <div className='footer-bottom'>
                <p>&copy; Bigbutton 2022</p>
                <a>Privacy & cookies</a>
                <a>Terms of use</a>
                <a> Help</a>
            </div>
        </div>
    );
}

export default Footer;
