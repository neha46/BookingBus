import React, { useState } from 'react';
import PageTitle from '../../components/PageTitle.js';
import BusFrom from '../../components/BusFrom.js';

const AdminBuses = () => {
  const [showBusForm,setShowBusForm]=useState(false);
  return (
    <div>
      <div className="d-flex justify-content-between">

     <PageTitle title="Buses"/>
     <button className='secondary-btn'onClick={()=>setShowBusForm(true)} >AddBus
        </button>
      </div>
        {showBusForm && <BusFrom showBusForm={showBusForm} setShowBusForm={setShowBusForm} />}
    </div>
  );
}

export default AdminBuses;
