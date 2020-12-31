import React, {useContext} from 'react';
import {RedditContext} from '../contexts/AppContext';
import AllSubs from './AllSubs';
import { Form, Input, Button } from 'antd';


export default function ManageSubs() {

    const {setAllApi} = useContext(RedditContext);

    //Form
    const [form] = Form.useForm();

    const onFinish = (values) => {
      let name = values['Sub Reddit Name'];
      let link = values['Sub Reddit Link'];
      if (link.slice(-1) === '/'){
        link = link.slice(0, -1);
      } 
      setAllApi(prev => {
        return {[name]: link + '.json', ...prev};
      })
      form.resetFields();
    };
    
    const layout = {
      labelCol: {
        span: 8,
      },
      wrapperCol: {
        span: 11,
      },
    };
    const tailLayout = {
      wrapperCol: {
        offset: 8,
        span: 16,
      },
    };


    return (
        <div>
          <a href='https://www.reddit.com/' target="_blank" rel="noreferrer" style={{fontSize: "0.8rem", margin: '1rem'}}>New to Reddit?</a>
          <Form
            form={form}
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              label="Sub Reddit Name"
              name="Sub Reddit Name"
              rules={[
                {
                  required: true,
                  message: 'Please input sub reddit name!',
                },
              ]}
            >
              <Input placeholder='Today I Fucked Up'/>
            </Form.Item>

            <Form.Item
              label="Sub Reddit Link"
              name="Sub Reddit Link"
              rules={[
                {
                  required: true,
                  message: 'Please input sub reddit link!',
                },
              ]}
            >
              <Input placeholder='https://www.reddit.com/r/tifu/' />
            </Form.Item>
            
            <Form.Item {...tailLayout}>
              <Button type="danger" htmlType="submit">
                Add
              </Button>
            </Form.Item>
         </Form>
         <div style={{fontSize: "0.8rem", margin: '1rem'}}>
          <strong>Example:</strong>
          <p><strong>Name Sub:</strong> Malicious Compliance -<strong>&ensp;Sub URL:</strong> https://www.reddit.com/r/MaliciousCompliance/</p>
          
         </div>
         <AllSubs />
        </div>
    )
}
