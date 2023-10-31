import React from 'react';
import {Form,Modal,Row,Col, message} from 'antd';
import { axiosInstance } from '../helper/axiosInstance';
import {useDispatch} from 'react-redux';
import {ShowLoading,HideLoading} from '../redux/alertSlice.js'
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const BusFrom = ({showBusForm,setShowBusForm,type='add'}) => {

    const dispatch=useDispatch()
    const onfinish=async(values)=>{
        try {
            dispatch(ShowLoading())
           let response=null;
           if(type==='/add'){
            response= await axiosInstance.post('/api/buses/add-bus',{
                ...values,
                journeyDate:moment(values.journeyDate).format('DD-MM-YYYY')
            })

           }
           else{
        }
        dispatch(HideLoading())
           if(response.data.success){
            message.success(response.data.message)
           }
           else{
            message.error(response.data.message)
           }
        } catch (error) {
            message.error(error.message)
            dispatch(HideLoading())
        }

    }
  return (
 
      <Modal width={800} title="Add Bus" open={showBusForm} onCancel={()=>setShowBusForm(false)} footer={null} >
        <Form layout='vertical' onFinish={onfinish} >
            <Row gutter={[10,10]}>
                <Col lg={24} xs={24}>
                    <Form.Item label="Bus Name" name="name">
                    <input type="text" />
                    </Form.Item>
                </Col>
                <Col lg={12} xs={24}>
                    <Form.Item label="Bus Number" name="number">
                    <input type="text" />
                    </Form.Item>
                </Col>
                <Col lg={12} xs={24}>
                    <Form.Item label="Capacity" name="capacity">
                    <input type="text" />
                    </Form.Item>
                </Col>
                <Col lg={12} xs={24}>
                    <Form.Item label="From" name="from">
                    <input type="text" />
                    </Form.Item>
                </Col>
                <Col lg={12} xs={24}>
                    <Form.Item label="to" name="to">
                    <input type="text" />
                    </Form.Item>
                </Col>
                <Col lg={8} xs={24}>
                    <Form.Item label="JourneyDate" name="journeyDate">
                    <input type="date" />
                    </Form.Item>
                </Col>
                <Col lg={8} xs={24}>
                    <Form.Item label="Departure" name="departure">
                    <input type="time" />
                    </Form.Item>
                </Col>
                <Col lg={8} xs={24}>
                    <Form.Item label="Arrival" name="arrival">
                    <input type="arrival" />
                    </Form.Item>
                </Col>

                <Col lg={12} xs={24}>
                    <Form.Item label="Type" name="type">
                    <input type="text" />
                    </Form.Item>
                </Col>
                <Col lg={12} xs={24}>
                    <Form.Item label="fare" name="fare">
                    <input type="text" />
                    </Form.Item>
                </Col>
            </Row>
            <div className="d-flex justify-content-end">
                <button className="secondary-btn" type="submit">submit</button>
            </div>
        </Form>
      </Modal>

  )
};

export default BusFrom;
