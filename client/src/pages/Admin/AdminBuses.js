import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle.js';
import BusFrom from '../../components/BusFrom.js';
import { axiosInstance } from '../../helper/axiosInstance.js';
import { useDispatch } from 'react-redux';
import { ShowLoading,HideLoading } from '../../redux/alertSlice.js';
import { Table, message } from 'antd';
const AdminBuses = () => {
  const [showBusForm,setShowBusForm]=useState(false);
  const [selectedBus,setSelectedBus]=useState(null)
  const[buses,setBuses]=useState([]);
  const dispatch=useDispatch();

  const GetBuses=async(req,res)=>{

    try{
      
            dispatch(ShowLoading());
            const response=await axiosInstance.post('/api/buses/get-all-buses',{})
            console.log(response)
            
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
  console.log("Buses is",buses)
  const columns=[
    {title:'name',
    dataIndex:'name'
  },
  {title:'Number',
  dataIndex:'number'
},
  {title:'From',
    dataIndex:'from'
  },
    {title:'To',
    dataIndex:'to'
  },
    {title:'JourneyDate',
    dataIndex:'journeyDate',
  },
    {title:'Status',
    dataIndex:'status',
  
  },
   {title:'Action',
    dataIndex:'action',
    render:(action,record)=>(
      <div className="d-flex gap-3">
        <i class="ri-delete-bin-6-line"></i>
        <i class="ri-pencil-fill" onClick={()=>{
          setSelectedBus(record);
          setShowBusForm(true);
        }
        }></i>
      </div>
    )
  
  }
  ]
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
      <Table columns={columns} dataSource={buses}/>
        {showBusForm && <BusFrom showBusForm={showBusForm} setShowBusForm={setShowBusForm} 
        type={selectedBus ? 'edit' : 'add'}
        selectedBus={selectedBus}
        getData={GetBuses}
        setSelectedBus={setSelectedBus}
        />}
    </div>
  );
}

export default AdminBuses;
