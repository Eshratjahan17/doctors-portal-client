import { format } from 'date-fns';
import React, { useState } from 'react';
import useData from '../../Hooks/useData';
import AppoinmentServices from './AppoinmentServices';
import BookingModal from './BookingModal';



const Appoinmentavailable = ({date}) => {
  const [services, setServices]=useData();
  const [treatment, setTreament] = useState(null);
  
 
 
  return (
    <div>
      <div>
        <p className="text-center mx-auto text-secondary font-bold">
          Available services on {format(date, "PPP")}.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.length &&
          services.map((service) => (
            <AppoinmentServices
              key={service._id}
              service={service}
              setTreament={setTreament}
            ></AppoinmentServices>
          ))}
      </div>

      {treatment && (
        <BookingModal
          date={date}
          treatment={treatment}
          setTreament={setTreament}
         
        ></BookingModal>
      )}
    </div>
  );
};

export default Appoinmentavailable;