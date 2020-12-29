import React, {useContext} from 'react';
import {RedditContext} from '../contexts/AppContext';
import 'antd/dist/antd.css';
import '../index.css';
import { List, Avatar, Space, Button, Collapse } from 'antd';
import { MessageOutlined, StarOutlined, ArrowUpOutlined, PushpinOutlined } from '@ant-design/icons';

export default function Stories() {
    const {source, handleSave, handleUnsave, save} = useContext(RedditContext);


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
            <IconText icon={StarOutlined} text={item.data.total_awards_received} key="list-vertical-like-o" />,
            <a href={item.data.url} target="_blank" rel="noreferrer"><IconText icon={MessageOutlined} text={item.data.num_comments} key="list-vertical-message" /></a>,
            save.includes(item)? <Button type='default' size="small" onClick={() => handleUnsave(item)}>Unsave</Button>:  <Button type='danger' size="small" onClick={() => handleSave(item)}>Save</Button>,
          
          ]}
        >
          <List.Item.Meta
              avatar={<Avatar src={(item.data.all_awardings.length > 0)? item.data.all_awardings[0].icon_url: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png'} />} 
              title={<a href={item.data.url}>{item.data.author}</a>}
          />
          {(item.data.stickied) ? <IconText icon={PushpinOutlined} key="stick" />: null}
          <Collapse expandIconPosition='right'  ghost>
            <Panel header={item.data.title} >
            <p>{item.data.selftext}</p>
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
