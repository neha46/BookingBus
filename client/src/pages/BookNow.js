import React from 'react';
import { useDispatch } from 'react-redux';
import { axiosInstance } from '../helper/axiosInstance.js';
import { ShowLoading,HideLoading } from '../redux/alertSlice.js';
import { useState,useEffect } from 'react';
import {message,Row,Col} from 'antd';
import { useParams } from 'react-router-dom';
import SeatSelection from '../components/SeatSelection.js';
import StripeCheckout from 'react-stripe-checkout';

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

      
    const BookRNow=async()=>{
      try {
        dispatch(ShowLoading());
                const BookingResponse=await axiosInstance.post('/api/booking/book-seat',{
                    bus:bus._id,
                    seats:selectedSeats
                })
                console.log(BookingResponse.data)
                  if(BookingResponse.data.success){
                    message.success(BookingResponse.data.message)   
                  }
                 
                else{
                    message.error(BookingResponse.data.message)
                }
                  dispatch(HideLoading())
        
      } catch (error) {
        dispatch(HideLoading())
        message.error(error.message)
      }
    }
    console.log("selectedSeats is",selectedSeats)
      
  const onToken=(token)=>{
    console.log("Token is ",token)
  }
    useEffect(()=>{
      getBus();
},[])
console.log("buss is",bus)
     
  return (
    <div>
     {bus && (<Row className='mt-3' gutter={[20]}>
        <Col lg={12} xs={24} sm={24} >
          <h1 className="text-2xl text-secondary">{bus?.name}</h1>
          <h1 className="text-md">{bus?.from} - {bus?.to}</h1>
          <hr/>
          <div className='flex flex-col gap-3 mt-3'>
          <h1 className="text-lg text-secondary">JourneyDate:<b> {bus?.journeyDate}</b></h1>
          <h1 className="text-lg text-secondary">Fare:<b> $ {bus?.fare} /-</b></h1>
          <h1 className="text-lg text-secondary">DepartureTime:<b> {bus?.departure}</b></h1>
          <h1 className="text-lg text-secondary">ArrivalTime:<b> {bus?.arrival}</b></h1>
          <h1 className="text-lg text-secondary">Seats Left:<b> {bus?.capacity - (bus?.seatsBooked?.length + selectedSeats.length)}</b></h1>
          </div>
        <hr/>

          <div className='flex flex-col gap-3 mt-3'>
          <h1 className="text-lg text-secondary">Selected Seats:<b> {selectedSeats.join(" , ")}</b></h1>
          <h1 className="text-lg text-secondary">Price:<b> {bus?.fare * selectedSeats.length}</b></h1>

          <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51O8jEzSGlvPU17qhp77V9AynqOWrLCJbt0GjEPMlt51cEe8KWRCgUxacWntIgtu76MOvJAcVKXZtndnPKzCHMWsc00qEQtcl3w">

          <button className={`secondary-btn mt-3 ${ selectedSeats.length===0 && "disabel-btn"}`}
          >BookNow</button>
      </StripeCheckout>

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
