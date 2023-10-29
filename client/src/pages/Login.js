import React from 'react';
import {Form,message} from 'antd';
import axios from 'axios';
import '../resources/auth.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { ShowLoading,HideLoading } from '../redux/alertSlice';

const Login = () => { 
  const dispatch =useDispatch();
    const navigate = useNavigate();
    const onfinish=async(values)=>{
        try {
          dispatch(ShowLoading())
            const  response= await axios.post('/api/users/login', values)
            dispatch(HideLoading())
            console.log(values)
        
          if(response.data.success){
              message.success(response.data.message)
              localStorage.setItem("token",response.data.data)
              navigate('/');
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
        <h2 className='text-xl text-center'> Login in your web</h2>
        <hr/>
      <Form layout='vertical'onFinish={onfinish}>

        <Form.Item label="email" name="email">
            <input htmlFor="text"></input>
        </Form.Item>
        <Form.Item label="password" name="password">
            <input htmlFor="password"></input>
        </Form.Item>
      <div className="d-flex justify-content-between">
        <Link to='/register'>lets go to Register</Link>
        <button className='secondary-btn'type='submit' >Login
        </button>
      </div>
      </Form>
      </div>
    </div>
  );
}

export default Login;
