import { ArrowDropDown, ArrowDropUp, DarkMode, Search } from '@mui/icons-material';
import React from 'react';
import Logo from '../assets/logo.png';
import { useState } from 'react';


const Topbar = () => {
    const [opened, setOpened] = useState(false);
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
                    flex: 2,
                    color: 'grey'
                }}/>
                <input type="text" placeholder="Search..."/>
            </div>
            <DarkMode style={{
                color: 'orange'
            }}/>
            {!opened && <ArrowDropDown />}
            {opened && <ArrowDropUp />}

        </div>
    );
}

export default Topbar;
