import React, {useContext} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {RedditContext} from '../contexts/AppContext';
export default function Header() {
    
    const {save, savedCm} = useContext(RedditContext);

    return (
        <NavBar>
            <NamSite>
                <h2 style={{marginLeft: '1rem'}}><Link style={{color: '#ffffff', }} to="/">Reddit Zen</Link></h2>
            </NamSite>

            <LinkWrapper>
                <Link style={{color: '#ffffff', }} to="/">Home</Link>
                <Link style={{color: '#ffffff', }} to="/saved">Posts Saved ({save.length})</Link>
                <Link style={{color: '#ffffff', }} to="/comments">Comments Saved ({savedCm.length})</Link>
            </LinkWrapper>

        </NavBar>
    )
}

const NavBar = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr;
   
    justify-items: start;
    padding-bottom: 0.2rem;
    padding-top: 0.2rem;
    background-color: #FF4500;
    & h2{
        color: #ffffff;
    }
`
const LinkWrapper = styled.div `
    display: grid;
    grid-template-columns: 1fr 2fr 3fr;
    align-items: center;
    grid-column-gap: 1rem;
`
const NamSite = styled.div `
   
`
