import React, {useContext} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {RedditContext} from '../contexts/AppContext';
export default function Header() {
    
    const {save} = useContext(RedditContext);

    return (
        <NavBar>
            <NamSite>
                <h1>Reddit Zen</h1>
            </NamSite>

            <LinkWrapper>
                <Link style={{color: '#ffffff', fontSize:'1.1rem'}} to="/">Home</Link>
                <Link style={{color: '#ffffff', fontSize:'1.1rem'}} to="/saved">Saved Posts ({save.length})</Link>
            </LinkWrapper>

            <div>
                <img src="https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_Snoos_head_1SVG.svg" alt="logo" height="35px"/>
            </div>
        </NavBar>
    )
}

const NavBar = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
    justify-items: center;
    padding-bottom: 0.5rem;
    padding-top: 1rem;
    background-color: #FF4500;
    & h1{
        color: #ffffff;
    }
`
const LinkWrapper = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    
`
const NamSite = styled.div `
    display: grid;
    align-items: center;
    align-content: center;
`