import React from 'react';

const AppoinmentServices = (props) => {
 console.log(props);
 
  return (
    <div>
      <div class="card   lg:max-w-lg bg-base-100 shadow-xl ">
        <div class="card-body items-center text-center  ">
          <h2 class="card-title text-xl font-bold text-secondary">
            {props?.service?.name}
          </h2>
          {/* <p>{service?.slots.length>0 ?<span>{service?.slots[0] </span>}: <span>Try Another</span>}</p>
          <p> */}
          <p>
            {props.service?.slots.length > 0 ? (
              <span>{props.service?.slots[0]}</span>
            ) : (
              <span className="text-red-500">Try another date.</span>
            )}
          </p>
          <p>
            {props.service?.slots?.length}
            {props.service?.slots?.length > 1 ? "slots" : "Slot"}Available
          </p>
          <div class="card-actions">
            <label
              for="booking-modal"
              disabled={props.service?.slots.length === 0}
              onClick={() => props?.setTreament(props?.service)}
              class="btn modal-button btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
            >
              open modal
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentServices;