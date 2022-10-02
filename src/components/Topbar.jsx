import { DarkMode, Search } from '@mui/icons-material';
import React from 'react';
import Logo from '../assets/logo.png';


const Topbar = () => {
    
    return (
        <div className='topbar'>
            <a href='/' className='logo'>
                <img src={Logo}/>
            </a>
            <div className='navlinks'>
                <a href='/'>Home</a>
                <a href='/'>Products</a>
                <a href='/'>Blogs</a>
                <a href='/'>About</a>
            </div>
            <div className='search'>
                <Search style={{
                    flex: 2
                }}/>
                <input type="text" placeholder="Search..."/>
            </div>
            <DarkMode style={{
                color: 'orange'
            }}/>
        </div>
    );
}

export default Topbar;
