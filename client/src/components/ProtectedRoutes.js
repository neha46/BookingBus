import axios from 'axios';
import React, { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import {message} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SetUser } from '../redux/userSlice.js';
import { ShowLoading,HideLoading } from '../redux/alertSlice.js';
import DefaultLayout  from '../pages/Admin/DefaultLayout.js';

const ProtectedRoutes = ({children}) => {
  
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const {loading}=useSelector((state)=>state.alert)
  const validateToken =async() => {
    try {
      dispatch(ShowLoading())
      const response = await axios.post('/api/users/get-user-by-id', {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      console.log(response.data)
      dispatch(HideLoading())
      if (response.data.success) {
      
        dispatch(SetUser(response.data.data))
      } else {
        localStorage.removeItem("token")
        dispatch(HideLoading())
        navigate('/login');
        message.error(response.data.message)
      }
    } catch (error) {
      localStorage.removeItem("token")
      dispatch(HideLoading())
      navigate('/login');
      message.error(error.message);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken();
    } else {
      dispatch(HideLoading())
      navigate('/login');
    }
  }, []);

  return <div>
      {!loading &&<DefaultLayout>{children}</DefaultLayout>
      }
    </div>
  
}

export default ProtectedRoutes;
