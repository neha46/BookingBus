import React from 'react';
import { useDispatch } from 'react-redux';
import { axiosInstance } from '../helper/axiosInstance.js';
import { ShowLoading,HideLoading } from '../redux/alertSlice.js';
import { useState,useEffect } from 'react';
import {message,Row,Col} from 'antd';
import { useParams } from 'react-router-dom';

const BookNow = () => {
      const[bus,setBus]=useState([]);
         const dispatch=useDispatch();
         const params=useParams()

    const getBus=async()=>{
 
        try{
          
                dispatch(ShowLoading());
                const response=await axiosInstance.post('/api/buses/get-bus-by-id',{
                    _id:params.id
                })
                console.log(response.data)
                console.log(response.data.data)
    
                
                if(response.data.success){
                    message.success(response.data.message)
                    setBus(response.data.data)
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
        getBus();
      },[])
      console.log("bus is:",bus)
  return (
    <div>
     {bus && (<Row className='mt-3'>
        <Col lg={12} xs={24} sm={24} >
          <h1 className="text-2xl text-secondary">{bus.name}</h1>
          <h1 className="text-md">{bus.from} - {bus.to}</h1>
          <hr/>
          <div>
          <h1 className="text-lg text-secondary">JourneyDate:<b> {bus.journeyDate}</b></h1>
          <h1 className="text-lg text-secondary">Fare:<b> $ {bus.journeyDate} /-</b></h1>
          <h1 className="text-lg text-secondary">DepartureTime:<b> {bus.departure}</b></h1>
          <h1 className="text-lg text-secondary">ArrivalTime:<b> {bus.arrival}</b></h1>
          </div>
        </Col>
        </Row>)}
    </div>
  );
}

export default BookNow;
