import React,{useEffect,useState} from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { axiosInstance } from '../helper/axiosInstance.js';
import { Col,Row, message } from 'antd';
import { ShowLoading,HideLoading } from '../redux/alertSlice.js';
import Bus from '../components/Bus.js';


const Home = () => {

    const[buses,setBuses]=useState([]);
  const {user}=useSelector((state)=>state.users)
   const dispatch=useDispatch();

  const getBuses=async()=>{
 
    try{
      
            dispatch(ShowLoading());
            const response=await axiosInstance.post('/api/buses/get-all-buses',{})
            console.log(response.data.data)

            
            if(response.data.success){
                message.success(response.data.message)
                setBuses(response.data.data)
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
  console.log("buses is :",buses)
  useEffect(()=>{
    getBuses();
  },[])

  return (
    <div>
    <div>
      <h1> Welcome {user.name} at Home page</h1>
      
    </div>
    <div>
      <Row>
        {buses.map(bus=>
         <Col lg={12} xs={24} sm={24}><Bus bus={bus}/></Col>
        )}
      </Row>
    </div>
    </div>
  );
}

export default Home;
