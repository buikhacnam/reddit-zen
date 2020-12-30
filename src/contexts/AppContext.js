import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const RedditContext = createContext();
const ShowerThoughtsApi = 'https://www.reddit.com/r/Showerthoughts.json';
const TifuApi = 'https://www.reddit.com/r/tifu.json';
const UnpopularOpinionApi = 'https://www.reddit.com/r/unpopularopinion.json';
const {Provider} = RedditContext;
const localData = localStorage.getItem('stories');
const localSubs = localStorage.getItem('subs');
const deFaultSubs = {'Shower Thoughts': ShowerThoughtsApi, 'Today I Fucked Up': TifuApi, 'Unpopular Opinion': UnpopularOpinionApi};

export default function AppContext({children}) {
    const [source, setSource] = useState([]);
    const [save, setSave] = useState(localData?(JSON.parse(localData)):[]);
    const [fetch, setFetch] = useState(0);
    const [apiSource, setApiSource] = useState(TifuApi);
    const [allApi, setAllApi] = useState((localSubs)? (JSON.parse(localSubs)): deFaultSubs);
    const [err, setErr] = useState(false);
   
    setTimeout(() => {
        setFetch(fetch + 1);
    }, 2000)


    function handleApiSource(source) {
        setApiSource(allApi[source])
    }

    function handleSave(item){
        setSave(prev => {
            return  [item, ...prev] 
        });
    }

    function handleUnsave(item){
        let newSave = save.filter(story => story.data.id !== item.data.id);
        setSave(newSave);
    }

    function handleClearSubs(item){
        delete allApi[item];
        setAllApi(allApi);
        localStorage.setItem('subs', JSON.stringify(allApi));
    }
   
    useEffect(() => {
        localStorage.setItem('stories', JSON.stringify(save));
    },[save])

    useEffect(() => {
        localStorage.setItem('subs', JSON.stringify(allApi));
        
    },[allApi])
   
    useEffect(() => {
        axios.get(apiSource)
            .then(results => {
                let redditData = results.data.data.children;
                setSource(redditData);
                setErr(false);
            }).catch(err => {
                setErr(true);
            });
        
    }, [apiSource]);
    return (
        <Provider value={{source, save, handleSave, handleUnsave, handleClearSubs, apiSource, handleApiSource, allApi, setAllApi, err}}>
            {children}
        </Provider>
    )
}
