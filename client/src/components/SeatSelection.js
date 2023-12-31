import React from 'react';
import { Col, Row } from 'antd';
import '../resources/bus.css';
const SeatSelection = ({selectedSeats,setSelectedSeats,bus}) => {
    const capacity=bus?.capacity;
    const  bookedSeats = bus?.seatsBooked || [];
    const SelectOrUnselectSeats=(seatNumber)=>{
        if(selectedSeats.includes(seatNumber)){
            setSelectedSeats(selectedSeats.filter((seat)=>seat !== seatNumber))
        }
        else
        {
            setSelectedSeats([...selectedSeats,seatNumber])
        }

    }
   
    console.log("bus is",bus)
  return (
    <div className='bus-container'>
        <Row gutter={[10,10]}>
            {Array.from(Array(capacity).keys()).map(seat=>
            {   let seatClass='';
            if(selectedSeats.includes(seat+1)){
                seatClass="selected-seat"
            }
            else if(bookedSeats.includes(seat+1)){
                seatClass="booked-seat"
            }
                return (<Col span={6}>
                    <div className={`seat ${seatClass} ` }
                    onClick={()=>SelectOrUnselectSeats(seat+1)}>{seat+1}</div>
                </Col>)
})}
        </Row>
      
    </div>
  );
}

export default SeatSelection;
