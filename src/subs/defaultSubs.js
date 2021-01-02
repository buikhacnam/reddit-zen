export const localData = localStorage.getItem('stories');
export const localSubs = localStorage.getItem('subs');
export const localComments = localStorage.getItem('comments');

export const TifuApi = 'https://www.reddit.com/r/tifu.json';

export const deFaultSubs = {
    'Shower Thoughts': 'https://www.reddit.com/r/Showerthoughts.json', 
    'Today I Fucked Up': TifuApi, 
    'Unpopular Opinion': 'https://www.reddit.com/r/unpopularopinion.json', 
    'Learn Programming' : 'https://www.reddit.com/r/learnprogramming.json', 
    'So Many Books, So Little Time': 'https://www.reddit.com/r/books.json',
    'Ask Reddit': 'https://www.reddit.com/r/AskReddit.json',
    'Explain Like Im Five' : 'https://www.reddit.com/r/explainlikeimfive.json',
    'Am I the Asshole?' : 'https://www.reddit.com/r/AmItheAsshole/',
};

