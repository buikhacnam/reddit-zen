import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const RedditContext = createContext();
const ShowerThoughtsApi = 'https://www.reddit.com/r/Showerthoughts.json';
const TifuApi = 'https://www.reddit.com/r/tifu.json';
const UnpopularOpinionApi = 'https://www.reddit.com/r/unpopularopinion.json';
const LearnprogrammingApi = 'https://www.reddit.com/r/learnprogramming.json';
const {Provider} = RedditContext;
const localData = localStorage.getItem('stories');
const localSubs = localStorage.getItem('subs');
const deFaultSubs = {'Shower Thoughts': ShowerThoughtsApi, 'Today I Fucked Up': TifuApi, 'Unpopular Opinion': UnpopularOpinionApi, 'Learn Programming' : LearnprogrammingApi};

export default function AppContext({children}) {
    const [source, setSource] = useState([]);
    const [save, setSave] = useState(localData?(JSON.parse(localData)):[]);
    const [apiSource, setApiSource] = useState(TifuApi);
    const [allApi, setAllApi] = useState((localSubs)? (JSON.parse(localSubs)): deFaultSubs);
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(true);
   
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

    useEffect(() => {
        localStorage.setItem('stories', JSON.stringify(save));
    },[save])

    useEffect(() => {
        localStorage.setItem('subs', JSON.stringify(allApi));      
    },[allApi])
   
    useEffect(() => {
        setLoading(true);
        axios.get(apiSource)
            .then(results => {
                let redditData = results.data.data.children;
                setSource(redditData);
                setLoading(false);
                setErr(false);
            }).catch(err => {
                setLoading(false);
                setErr(true);
            });
        
    }, [apiSource]);
    return (
        <Provider value={{source, save, handleSave, handleUnsave, apiSource, handleApiSource, allApi, setAllApi, err, loading}}>
            {children}
        </Provider>
    )
}
