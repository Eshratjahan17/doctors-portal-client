import React from 'react';
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from '../../assets/images/chair.png';



const ApponmentBanner = ({date,setDate}) => {
  
  return (
    <div>
      <div class="hero min-h-screen ">
        <div class="hero-content   flex-col lg:flex-row-reverse">
          <img src={chair} class="max-w-sm rounded-lg shadow-2xl ml-8  " />
          <div>
            <DayPicker
             mode="single" 
             selected={date} 
             onSelect={setDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApponmentBanner;