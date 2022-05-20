import React from 'react';
import useData from '../../Hooks/useData';

const BookingModal = ({date}) => {
  const[services, setServices] =useData();
  
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 class="text-lg font-bold"></h3>
          <input
            type="text"
            disabled
           
            class="input input-bordered w-full max-w-xs"
          />
          <select name="slot" class="select select-bordered w-full max-w-xs">
            {/* {slots.map((slot) => (
              <option value={slot}>{slot}</option>
            ))} */}
          </select>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            class="input input-bordered w-full max-w-xs"
          />
          <input
            type="submit"
            value="Submit"
            class="btn btn-secondary w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingModal;