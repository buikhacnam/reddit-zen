import React, {useContext} from 'react';
import {RedditContext} from '../contexts/AppContext';
import Stories from '../components/Stories';

export default function Home() {
    const {source} = useContext(RedditContext);
    return (
        <div>
            <Stories />
        </div>
    )
}
