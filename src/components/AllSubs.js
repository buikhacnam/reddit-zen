import React, {useContext} from 'react';
import {RedditContext} from '../contexts/AppContext';
import { List, Button, } from 'antd';

export default function AllSubs() {
    const {allApi, handleClearSubs} = useContext(RedditContext);
    
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
