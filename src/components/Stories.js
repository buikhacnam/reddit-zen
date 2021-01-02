import React, {useContext} from 'react';
import {RedditContext} from '../contexts/AppContext';
import { List, Avatar, Space, Button, Collapse, Spin } from 'antd';
import { MessageFilled, StarFilled, ArrowUpOutlined, PushpinFilled, HeartFilled } from '@ant-design/icons';


export default function Stories() {
    const {source, save, handleSave, handleUnsave, comments, handleReadComment, handleSaveComment, handleUnsaveCm2, savedCm} = useContext(RedditContext);

    const IconText = ({ icon, text }) => (
        <Space>
          {React.createElement(icon)}
          {text}
        </Space>
      );

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
          dataSource={source}
        
          renderItem={item => (
            <div>
            
              <List.Item
                  key={item.data.id}
                  actions={[
                    <IconText icon={ArrowUpOutlined} text={item.data.ups} key="list-vertical-arrow-o" />,
                    <IconText icon={StarFilled} text={item.data.total_awards_received} key="list-vertical-like-o" />,
                    <IconText icon={MessageFilled} text={item.data.num_comments} key="list-vertical-message" />,
                    save.includes(item)? <Button type='default' size="small" onClick={() => handleUnsave(item)}>Unsave</Button>:  <Button type='danger' size="small" onClick={() => handleSave(item)}>Save</Button>,
                  ]}
              >
                <List.Item.Meta
                    avatar={<Avatar src={(item.data.all_awardings.length > 0)? item.data.all_awardings[0].icon_url: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png'} />} 
                    title={<p style={{fontSize: '0.7rem'}}>{item.data.author}</p>}
                />
                {(item.data.stickied) ? <IconText icon={PushpinFilled} key="stick" />: null}
                <Collapse expandIconPosition='left'  ghost>
                  <Panel header={<h2>{item.data.title}</h2>} >
                  <p>{item.data.selftext}</p>
                  <Collapse onChange={() => handleReadComment(item.data.url)}>
                    <Panel header='Comments' >
                      <div>
                        {comments.loading && <Spin />}
                        {(comments.content && !comments.loading) ? comments.content.map(comment => {
                          return <div key={comment.data.id} style={{marginBottom: '1.2rem'}}>
                            <div>
                              <i style={{fontSize: '0.7rem'}}>{comment.data.author}</i>&ensp;
                              <span><HeartFilled style={{color: '#FF4500'}}/>&ensp;{comment.data.score? comment.data.score: 0} </span>
                            </div>
                            {comment.data.body}&ensp;  
                            <div style={{marginTop: '0.5rem'}}>
                              {(savedCm.some(item => item.comment === comment.data.body)) ?
                                <Button size='small' type="default" style={{fontSize: '0.7rem', color:'red' }} onClick={() => handleUnsaveCm2(comment.data.body)}>Unsave</Button>
                                :
                                <Button size='small' type="default" style={{fontSize: '0.7rem', color:'red'}} onClick={() => handleSaveComment(comment.data.body, item)}>Save</Button>
                              }
                            </div>
                            
                            
                          </div>
                        }): null}
                      </div>
                    </Panel>
                  </Collapse>
                  </Panel>
                </Collapse>
              
              </List.Item> 
              <div style={{marginBottom: '30px'}}></div>
        
            </div>
          )}
        />

      </>
    )
}
