import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
import {deFaultSubs, TifuApi} from '../subs/defaultSubs';
import {localData, localSubs, localComments} from '../subs/defaultSubs';
export const RedditContext = createContext();
const {Provider} = RedditContext;

export default function AppContext({children}) {
    const [source, setSource] = useState([]);
    const [save, setSave] = useState(localData?(JSON.parse(localData)):[]);
    const [apiSource, setApiSource] = useState(TifuApi);
    const [allApi, setAllApi] = useState((localSubs)? (JSON.parse(localSubs)): deFaultSubs);
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(true);
    const [comments, setComments] = useState({content: [], loading: true});
    const [savedCm, setSavedCm] = useState(localComments?(JSON.parse(localComments)):[]);
    
    // API source for fetching
    function handleApiSource(source) {
        setApiSource(allApi[source])
    }

    //save a new story
    function handleSave(item){
        setSave(prev => {
            return  [item, ...prev] 
        });
    }

    // Unsave a story
    function handleUnsave(item){
        let newSave = save.filter(story => story.data.id !== item.data.id);
        setSave(newSave);
    }

    // unsave a sub
    function handleClearSubs (item) {
        const newApi = allApi
        delete newApi[item];
        setAllApi((newApi) => {
          return {...newApi};
        });
        localStorage.setItem('subs', JSON.stringify(allApi));
    }

    //read comments
    async  function handleReadComment(url) {
        setComments({content: [], loading: true});
        let commentUrl = url + '.json'
        await axios.get(commentUrl)
            .then(results => {
                let commentsData = results.data[1].data.children; 
                setComments({content: [...commentsData] , loading: false});   
            });
    }

      //save comment:
    function handleSaveComment(comment, story) {
        console.log(comment, story);
        setSavedCm ((prev) => {
          return [{story, comment}, ...prev]
        })
    }

    // Unsave comment:
    function handleUnsaveCm(item) {
        let newSaveCm = savedCm.filter(cm => cm.comment !== item.comment);
        setSavedCm(newSaveCm);
    }

    //unsave a comment from newsfeed
    function handleUnsaveCm2(item) {
        let newSaveCm = savedCm.filter(cm => cm.comment !== item);
        setSavedCm(newSaveCm);
    }

    //update stories
    useEffect(() => {
        localStorage.setItem('stories', JSON.stringify(save));
    },[save])

    //update subs
    useEffect(() => {
        localStorage.setItem('subs', JSON.stringify(allApi));      
    },[allApi])

    // update comments
    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(savedCm));
    }, [savedCm]);
   
    //fetching data
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
        <Provider value={{  
                            source, 
                            save, 
                            handleSave, 
                            handleUnsave, 
                            apiSource, 
                            handleApiSource, 
                            allApi, 
                            setAllApi, 
                            handleClearSubs, 
                            err, 
                            loading,
                            comments,
                            handleReadComment,
                            handleSaveComment,
                            handleUnsaveCm,
                            handleUnsaveCm2,
                            savedCm, 
                            setSavedCm
                        }}>
            {children}
        </Provider>
    )
}
