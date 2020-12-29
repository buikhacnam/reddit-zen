import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const RedditContext = createContext();
const {Provider} = RedditContext;
const localData = localStorage.getItem('stories');

export default function AppContext({children}) {
    const [source, setSource] = useState([]);
    const [save, setSave] = useState(localData?(JSON.parse(localData)):[]);
    const [fetch, setFetch] = useState(0);
    const RedditApi = 'https://www.reddit.com/r/Showerthoughts.json';
    const TifuApi = 'https://www.reddit.com/r/tifu.json';
    
    setTimeout(() => {
        setFetch(fetch + 1);
    }, 3000)

    function handleSave(item){
        setSave(prev => {
            return  [item, ...prev] 
        });
       // console.log(save)
    }

    function handleUnsave(item){
        let newSave = save.filter(story => story.data.id !== item.data.id);
        setSave(newSave);
    }

    useEffect(() => {
        localStorage.setItem('stories', JSON.stringify(save));
    },[save])
   
    useEffect(() => {
        axios.get(TifuApi)
            .then(results => {
                let redditData = results.data.data.children;
                setSource(redditData);
                //console.log(source);
            })
    }, []);
    return (
        <Provider value={{source, save, handleSave, handleUnsave}}>
            {children}
        </Provider>
    )
}
