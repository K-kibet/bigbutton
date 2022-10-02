import { ContactSupportOutlined, ForumOutlined, Home, InfoOutlined, MiscellaneousServicesOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    z-index: 1000;
    position: fixed;
    flex: 1;
    left: 250px;
    width: 250px;
    height: 100%;
    margin-left: -250px;
    overflow-y: auto;
    background: #37474F;
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    transition: all 0.5s ease;
`

const Title = styled.a`
    background-color: #263238;
    font-size: 20px;
    line-height: 52px;
    text-align: center;
    color: #fff;
    display: block;
    text-decoration: none;
`

const Wrapper = styled.nav`
    
`

const NavLink = styled.a`
    background: none;
    border-bottom: 1px solid #455A64;
    color: #CFD8DC;
    font-size: 14px;
    padding: 16px 24px;
    
`



const Sidebar = () => {
    return (
        <Container>
                  <button
        className="sidebar-viewButton"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-left"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
            <Title>

            </Title>
            <Wrapper>
                <NavLink>
                    <Home /> 
                    <span>Home</span>
                </NavLink>
                <NavLink>
                    <InfoOutlined /> 
                    <span>About</span> 
                </NavLink>
                <NavLink>
                    <ForumOutlined /> 
                    <span>Forum</span>
                </NavLink>
                <NavLink>
                    <MiscellaneousServicesOutlined />
                    <span>Services</span> 
                </NavLink>
                <NavLink>
                    <ContactSupportOutlined /> 
                    <span>Contact</span> 
                </NavLink>
            </Wrapper>
            <div className="sidebar-profileSection">
                <img
                    src="https://assets.codepen.io/3306515/i-know.jpg"
                    width="40"
                    height="40"
                    alt="Monica Geller"
                />
                <span>Monica Geller</span>
            </div>

        </Container>
    );
}

export default Sidebar;
