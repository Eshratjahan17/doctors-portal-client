import React from 'react';
import BookingModal from './BookingModal';

const AppoinmentServices = ({service}) => {
 
  return (
    <div>
      <div class="card   lg:max-w-lg bg-base-100 shadow-xl ">
        <div class="card-body items-center text-center  ">
          <h2 class="card-title text-xl font-bold text-secondary">
            {service?.name}
          </h2>
          {/* <p>{service?.slots.length>0 ?<span>{service?.slots[0] </span>}: <span>Try Another</span>}</p>
          <p> */}
          <p>
            {service?.slots.length > 0 ? (
              <span>{service?.slots[0]}</span>
            ) : (
              <span className="text-red-500">Try another date.</span>
            )}
          </p>
          <p>
            {service?.slots?.length}
            {service?.slots?.length > 1 ? "slots" : "Slot"}Available
          </p>
          <div class="card-actions">
            <label
              for="booking-modal"
              disabled={service?.slots.length === 0}
              
              class="btn modal-button btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
            >
              open modal
            </label>
            <BookingModal
             ></BookingModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentServices;