import React from 'react';
import {Form, message} from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../resources/auth.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ShowLoading,HideLoading } from '../redux/alertSlice';

const Register = () => {
  const dispatch =useDispatch();
  const navigate=useNavigate()
    const onfinish=async(values)=>{
      try {
        dispatch(ShowLoading())
          const  response= await axios.post('/api/users/register',values)
          dispatch(HideLoading())
        if(response.data.success){
            message.success(response.data.message)
            navigate('/login')
            }
            else
        {
            message.error(response.data.message)
        }
    }
        catch(error){
          dispatch(HideLoading())
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
