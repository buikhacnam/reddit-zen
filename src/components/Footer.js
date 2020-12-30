import React from 'react';
import styled from 'styled-components';

export default function Footer() {
    return (
        <FooterWrapper>
            <p>created by<a href='https://buinam.com' target="_blank" rel="noreferrer"> Bui Nam</a></p>
        </FooterWrapper>
    )
}

const FooterWrapper = styled.div`
    margin-top: 1rem;
    position: fixed;
    bottom: -0.5rem;
    width: 100vw;
    background-color: #ffffff;
    padding-bottom: 0;
    text-align: center;
    & a {
        color: #FF4500;
        font-size: 0.7rem;
    }
    & p {
        font-size: 0.7rem;
    }
    
`