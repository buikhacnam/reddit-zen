import React, {useContext} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {RedditContext} from '../contexts/AppContext';
export default function Header() {
    
    const {save} = useContext(RedditContext);

    return (
        <NavBar>
            <NamSite>
                <h2 style={{marginLeft: '1rem'}}>Reddit Zen</h2>
            </NamSite>

            <LinkWrapper>
                <Link style={{color: '#ffffff', textDecoration: 'underline'}} to="/">Home</Link>
                <Link style={{color: '#ffffff', textDecoration: 'underline'}} to="/saved">Saved Posts ({save.length})</Link>
            </LinkWrapper>

            <ImageWrapper>
                <img src="https://logos-download.com/wp-content/uploads/2016/06/Reddit_logo_Snoos_head_1SVG.svg" alt="logo" height="30px"/>
            </ImageWrapper>
        </NavBar>
    )
}

const NavBar = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    justify-content: center;
    justify-items: center;
    padding-bottom: 0.2rem;
    padding-top: 0.2rem;
    background-color: #FF4500;
    & h2{
        color: #ffffff;
    }
`
const LinkWrapper = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    
`
const NamSite = styled.div `
   
`

const ImageWrapper = styled.div `
    display: grid;
    align-items: center;
    align-content: center;
`