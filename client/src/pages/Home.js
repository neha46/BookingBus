import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const {user}=useSelector((state)=>state.users)
  return (
    <div>
      <h1> Welcome to Home page</h1>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
    </div>
  );
}

export default Home;
