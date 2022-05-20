import React, { useState } from 'react';
import "react-day-picker/dist/style.css";
import ApponmentBanner from '../AppoinmentPage/ApponmentBanner';
import Appoinmentavailable from './Appoinmentavailable';
import AppoinmentServices from './AppoinmentServices';



const AppoinmentPage = () => {
  const [date, setDate] = useState(new Date());
 
  return (
    <div>
      <ApponmentBanner date={date} setDate={setDate} ></ApponmentBanner>
     <Appoinmentavailable date={date}></Appoinmentavailable>
     <AppoinmentServices></AppoinmentServices>
    </div>

  );
};

export default AppoinmentPage;