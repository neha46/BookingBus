import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {message} from 'antd';

const ProtectedRoutes = ({children}) => {
  
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const validateToken =async() => {
    try {
      const response = await axios.post('/api/users/get-user-by-id', {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });

      if (response.data.success) {
        setLoading(false);
        navigate('/')
      } else {
        localStorage.removeItem("token")
        setLoading(false);
        navigate('/login');
        message.error(response.data.message)
      }
    } catch (error) {
      localStorage.removeItem("token")
      setLoading(false);
      navigate('/login');
      message.error(error.message);
    }
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken();
    } else {
      setLoading(false);
      navigate('/login');
    }
  }, []);

  return <div>
      {loading ? <div>Loading......</div> : <>{children}</>}
    </div>
  
}

export default ProtectedRoutes;
