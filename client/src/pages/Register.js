import React from 'react';
import {Form, message} from 'antd';
import axios from 'axios';

import '../resources/auth.css';
import { Link } from 'react-router-dom';

const Register = () => {
    const onfinish=async(values)=>{
      try {
          const  response= await axios.post('/api/users/register',values)
        if(response.data.success){
            message.success(response.data.message)
            }
            else
        {
            message.error(response.data.message)
        }
    }
        catch(error){
            message.error(error.message)
        }
      }
        
  return (
    <div className=' h-screen d-flex justify-content-center align-items-center  border border-2 border-secondary'>

      <div className=" card w-400 p-3 ">
        <h2 className='text-xl text-center'>Register page 👻</h2>
        <hr/>
      <Form layout='vertical'onFinish={onfinish}>
        <Form.Item label="name" name="name">
            <input htmlFor="text"></input>
        </Form.Item>
        <Form.Item label="email" name="email">
            <input htmlFor="text"></input>
        </Form.Item>
        <Form.Item label="password" name="password">
            <input htmlFor="password"></input>
        </Form.Item>
      <div className="d-flex justify-content-between">
        <Link to='/login'>Click here to login</Link>
        <button className='secondary-btn'type='submit'>Register</button>
      </div>
      </Form>
      </div>
    </div>
  )};

export default Register;
