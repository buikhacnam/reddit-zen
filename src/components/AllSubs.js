import React, {useContext, useState} from 'react';
import {RedditContext} from '../contexts/AppContext';
import { List, Button, } from 'antd';

export default function AllSubs() {
    const {allApi, setAllApi} = useContext(RedditContext);
    const [isDelete, setIsDelete] = useState(false);
    
    
    async function handleClearSubs (item) {
      const newApi = allApi
     await delete newApi[item];
      setAllApi((newApi) => {
        return {...newApi};
      });
      localStorage.setItem('subs', JSON.stringify(allApi));
      console.log(allApi)
    }
    return (
        <>
    
          <List
            itemLayout="vertical"
            size="small"
            pagination={{
              onChange: page => {
              },
              pageSize: 10,
            }}
            dataSource={Object.keys(allApi)}
          
            renderItem={item => (
              <div>
              
                <List.Item
                  key={item}
                  actions={[
                    <Button type='danger' size="small" onClick={() => handleClearSubs(item)}>Delete</Button>
                  ]}
          >
            <List.Item.Meta
                title={item}
            />
            
          </List.Item> 
          
          <div style={{marginBottom: '30px'}}></div>
      </div>
      )}
    />

  </>
    )
}
