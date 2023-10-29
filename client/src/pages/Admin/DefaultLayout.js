import React from 'react';
import '../../resources/layout.css';
import {useNavigate} from 'react-router-dom';

const DefaultLayout = ({ children }) => {
  const navigate=useNavigate()
  const userMenu = []
  const adminMenu = [
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
  const MenuToBeRender = adminMenu;
  return (
    <div className='Parent-layout'>
      {/* side bar---- */}
      <div className="sidebar">
        <div className="d-flex flex-column p-2 gap-3">
        {
          MenuToBeRender.map((item,index)=>{
            return (<div className={`${activeRoute===item.path &&'active-menu-item'} MenuItem`}>
              <i className={item.icon}></i>
              <span onClick={()=>{navigate(item.path)}}>{item.name}</span>
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
          header
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
