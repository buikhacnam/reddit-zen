import React from 'react'
import SavedStories from '../components/SavedStories'
import styled from 'styled-components';

export default function Saved() {
    return (
        <>
            
            <MainContent style={{paddingBottom: '1rem'}}>
                 <h2 style={{color: '#FF4500', marginBottom: '2rem', paddingLeft: '1rem', marginTop: '1rem'}}>Saved Posts</h2>
                <SavedStories />
            </MainContent>
        </>
    )
}

const MainContent = styled.div`
    margin: 0 auto;
    width: 65vw;
    padding-bottom: 2rem;
    @media (max-width: 768px) {
    width: 95vw;
  }
    
`