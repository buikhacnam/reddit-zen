import React, {useContext} from 'react';
import {RedditContext} from '../contexts/AppContext';
import { List, Button, Collapse } from 'antd';

export default function AllCommentsSaved() {
    const {savedCm, handleUnsaveCm} = useContext(RedditContext)
    const { Panel } = Collapse; 
  
  return (
      <>
        <List
                itemLayout="vertical"
                size="small"
                pagination={{
                    onChange: page => {
                    },
                    pageSize: 6,
                }}
                dataSource={savedCm}
                
                renderItem={item => (
                    <div>
                        <List.Item
                                key={item.comment}
                                actions={[
                                    <Button type='default' size="small" onClick={() => handleUnsaveCm(item)} style={{marginLeft: '1rem'}}>Unsave</Button>
                                ]}
                        >
                
                            <Collapse expandIconPosition='left'  ghost>
                            <Panel header={item.comment} >
                                <h4>{item.story.data.title}</h4>
                                <p>{item.story.data.selftext}</p>  
                            </Panel>
                            </Collapse>
                        </List.Item>
                        <div style={{marginBottom: '30px'}}></div>
                    </div>
                )}
        />
        {savedCm.length < 1? <h4 style={{textAlign: 'center', color:'red'}}>No comments saved at the moment.</h4>: null}
    </>
  )
}
