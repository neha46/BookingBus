import React from 'react';
import { useDispatch } from 'react-redux';
import { axiosInstance } from '../helper/axiosInstance.js';
import { ShowLoading,HideLoading } from '../redux/alertSlice.js';
import { useState,useEffect } from 'react';
import {message,Row,Col} from 'antd';
import { useParams } from 'react-router-dom';
import SeatSelection from '../components/SeatSelection.js';

const BookNow = () => {
  const [selectedSeats,setSelectedSeats]=useState([])
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
     {bus && (<Row className='mt-3' gutter={[20]}>
        <Col lg={12} xs={24} sm={24} >
          <h1 className="text-2xl text-secondary">{bus.name}</h1>
          <h1 className="text-md">{bus.from} - {bus.to}</h1>
          <hr/>
          <div className='flex flex-col gap-3 mt-3'>
          <h1 className="text-lg text-secondary">JourneyDate:<b> {bus.journeyDate}</b></h1>
          <h1 className="text-lg text-secondary">Fare:<b> $ {bus.fare} /-</b></h1>
          <h1 className="text-lg text-secondary">DepartureTime:<b> {bus.departure}</b></h1>
          <h1 className="text-lg text-secondary">ArrivalTime:<b> {bus.arrival}</b></h1>
          </div>
        <hr/>

          <div className='flex flex-col gap-3 mt-3'>
          <h1 className="text-lg text-secondary">Selected Seats:<b> {selectedSeats.join(" , ")}</b></h1>
          <h1 className="text-lg text-secondary">Price:<b> {bus.fare * selectedSeats.length}</b></h1>
          <button className="secondary-btn">BookNow</button>
            </div>
        </Col>
        {/* for seat selection */}
        <Col lg={12} xs={24} sm={24} >
        <SeatSelection selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} bus={bus} />
        </Col>
        </Row>)}
    </div>
  );
}

export default BookNow;
