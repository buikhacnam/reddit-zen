import React, {useContext} from 'react';
import {RedditContext} from '../contexts/AppContext';
import 'antd/dist/antd.css';
import '../index.css';
import { List, Avatar, Space, Button } from 'antd';
import { MessageOutlined, StarOutlined, ArrowUpOutlined, PushpinOutlined } from '@ant-design/icons';

export default function SavedStories() {
    const {save, handleUnsave} = useContext(RedditContext);

    
    const IconText = ({ icon, text }) => (
        <Space>
          {React.createElement(icon)}
          {text}
        </Space>
      );
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
    dataSource={save}
  
    renderItem={item => (
      <List.Item
        key={item.data.id}
        actions={[
          <IconText icon={ArrowUpOutlined} text={item.data.ups} key="list-vertical-arrow-o" />,
          <IconText icon={StarOutlined} text={item.data.total_awards_received} key="list-vertical-like-o" />,
          <a href={item.data.url} target="_blank" rel="noreferrer"><IconText icon={MessageOutlined} text={item.data.num_comments} key="list-vertical-message" /></a>,
          <Button type='default' size="small" onClick={() => handleUnsave(item)}>Unsave</Button>
        ]}
      >
        <List.Item.Meta
            avatar={<Avatar src={(item.data.all_awardings.length > 0)? item.data.all_awardings[0].icon_url: 'https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png'} />} 
            title={<a href={item.data.url}>{item.data.author}</a>}
        />
        {(item.data.stickied) ? <IconText icon={PushpinOutlined} key="stick" />: null}
        {item.data.title}
      </List.Item>
    )}
  />
    {save.length < 1? <h4 style={{textAlign: 'center', color:'red'}}>No saved post at the moment.</h4>: null}
  </>
    )
    
}

