import React, { useState } from 'react';
import '../../resources/layout.css';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

const DefaultLayout = ({ children }) => {
  const {user}=useSelector((state)=>state.users)
  const [collapsed,setCollapsed]=useState(false);
  const navigate=useNavigate()
  const userMenu = [
    {
      name:"Home",
      path:'/',
      icon: 'ri-home-line'
    },
    {
      name:"Profile",
      path:'/profile',
      icon: 'ri-user-smile-line'
    },
    {
      name:'Bookings',
      path:'/booking',
      icon: 'ri-bookmark-line'
    },
     {
      name:'Buses',
      path:'/buses',
      icon: 'ri-bookmark-line'
    },
    {
      name:'Logout'
      ,path:'/logout',
      icon: 'ri-logout-circle-line'
    }
  ]
  const adminMenu =[
    {
      name: "Home",
      path: '/admin',
      icon: 'ri-home-line'
    },
    {
      name: 'Buses',
      path: '/admin/buses',
      icon: 'ri-bus-fill'
    },
    {
      name: 'Users',
      path: '/admin/users',
      icon: 'ri-user-smile-line'
    },
    {
      name: 'Bookings',
      path: '/admin/bookings',
      icon: 'ri-bookmark-line'
    },
    {
      name: 'Logout',
      path: '/logout',
      icon: 'ri-logout-circle-line'
    }
  ]
  const activeRoute=window.location.pathname;
  const MenuToBeRender =  user?.isAdmin? adminMenu : userMenu;
  return (
    <div className='Parent-layout'>
      {/* side bar---- */}
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
        <h1 className="logo">SB</h1>
          </div>
          <div className="role">role:
            {user?.isAdmin?"Admin":'user -' + user?.name}
          </div>
        </div>
        <div className="d-flex flex-column p-2 gap-3">
        {
          MenuToBeRender.map((item,index)=>{
            return (<div  className={`${activeRoute===item.path &&'active-menu-item'} MenuItem`}>
              <i className={item.icon}></i>
              {!collapsed && <span onClick={()=>{
              if(item.path==='/logout')
               { localStorage.removeItem("token")
                navigate('/login')}
                else{
                  navigate(item.path)
                }
              }}>{item.name}</span>}
            </div>
            )
          })
        }
        </div>
      </div>

      {/* body----- */}
      <div className="body">
        {/* header---- */}
        <div className="header">
          {collapsed?(<i class="ri-menu-2-line" onClick={()=>{setCollapsed(!collapsed)}}></i>):(<i class="ri-close-line"onClick={()=>{setCollapsed(!collapsed)}} ></i>)}
        </div>

        {/* content---- */}
        <div className="content">
          {children}
        </div>
      </div>

    </div>
  );
}

export default DefaultLayout;
