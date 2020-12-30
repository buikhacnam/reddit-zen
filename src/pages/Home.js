import React, {useContext, useState} from 'react';
import ManageSubs from '../components/ManageSubs'
import {RedditContext} from '../contexts/AppContext';
import Stories from '../components/Stories';
import { Menu, Dropdown, Space,  Modal, Button } from 'antd';
import { RedditOutlined } from '@ant-design/icons';
import styled from 'styled-components';

export default function Home() {
    const {handleApiSource, allApi, err} = useContext(RedditContext);
    const [nameSub, setNameSub] = useState("Today I Fucked Up")
    // drop down menu
    function handleMenuClick(e) {
        const value = e.domEvent.target.innerText;
        handleApiSource(value);
        setNameSub(value);
    }
    

    const menu = (
        <Menu onClick={handleMenuClick}>
            {Object.keys(allApi).map(apiName => {
                return  <Menu.Item key={apiName} icon={<RedditOutlined />}>
                             {apiName}
                        </Menu.Item>
            })}
            {Object.keys(allApi).length < 1 && <Menu.Item key='null' icon={<RedditOutlined />}>
                             You follow no subs.
            </Menu.Item>}
            
        </Menu>
    );

    
    // modal;
    const [visible, setVisible] = useState(false);

    return (
        <Container>
        <MainContent>
            <Controls>
                <Space wrap>
                    <Dropdown.Button  overlay={menu} type='danger' >
                        Reddit Subs : {nameSub}
                    </Dropdown.Button>
                </Space>

                <Button type="danger" onClick={() => setVisible(true)}  style={{marginLeft: '1rem', marginTop: '1rem'}}>
                    Add New Reddit Subs
                </Button>
            </Controls>
            <h2 style={{color: '#FF4500', marginBottom: '2rem', paddingLeft: '1rem'}}>{nameSub}</h2>

            <Modal
                title="Customize Reddit Subs"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1000}
            >
                <ManageSubs />
            </Modal>
            {(err)? <h2 style={{paddingLeft: '1rem'}}>Error. Try refresh or check the sub's URL</h2> : <Stories />}
            
        </MainContent>
        </Container>
    )
}

const MainContent = styled.div`
    margin: 0 auto;
    width: 65vw;
    padding-bottom: 2rem;
    
`
const Container = styled.div`
   padding-bottom: 1rem;
`
const Controls = styled.div`
    margin-bottom: 3rem;
    text-align: center;
    margin-top: 1rem;
`