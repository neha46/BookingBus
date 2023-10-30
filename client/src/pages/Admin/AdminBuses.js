import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle.js';
import BusFrom from '../../components/BusFrom.js';
import { axiosInstance } from '../../helper/axiosInstance.js';
import { useDispatch } from 'react-redux';
import { ShowLoading,HideLoading } from '../../redux/alertSlice.js';
import { message } from 'antd';

const AdminBuses = () => {
  const [showBusForm,setShowBusForm]=useState(false);
  const[AdminBuses,setBuses]=useState([]);
  const dispatch=useDispatch();

  const GetBuses=async()=>{
    try{
      
            dispatch(ShowLoading());
            const response=await axiosInstance.post('/api/buses/get-all-buses',{})
            
            if(response.data.success){
                message.success(response.data.message)
              }
            else{
                message.error(response.data.message)
            }
              dispatch(HideLoading())
        } 
    catch(error){
       dispatch(HideLoading())
      message.error(error.message)
    }
  }
  useEffect(()=>{
    GetBuses()
  },[])
  return (
    <div>
      <div className="d-flex justify-content-between">

     <PageTitle title="Buses"/>
     <button className='secondary-btn'onClick={()=>setShowBusForm(true)} >AddBus
        </button>
      </div>
        {showBusForm && <BusFrom showBusForm={showBusForm} setShowBusForm={setShowBusForm} type='/add'/>}
    </div>
  );
}

export default AdminBuses;
