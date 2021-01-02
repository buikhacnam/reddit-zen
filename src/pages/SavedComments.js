import React from 'react'
import AllCommentsSaved from '../components/AllCommentsSaved'
import styled from 'styled-components';

export default function SavedComments() {
    return (
        <> 
            <MainContent style={{paddingBottom: '1rem'}}>
                 <h2 style={{color: '#FF4500', marginBottom: '2rem', paddingLeft: '1rem', marginTop: '1rem'}}>All Comments Saved</h2>
                <AllCommentsSaved />
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