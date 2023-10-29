import React from 'react';
import {Form,Modal,Row,Col} from 'antd';

const BusFrom = ({showBusForm,setShowBusForm}) => {
  return (
 
      <Modal width={800} title="Add Bus" visible={showBusForm} onCancel={()=>setShowBusForm(false)} footer={null} >
        <Form layout='vertical'>
            <Row>
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
            </Row>
        </Form>
      </Modal>

  )
};

export default BusFrom;
