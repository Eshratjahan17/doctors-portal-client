import React from 'react';
import doctor from '../../../assets/images/doctor.png';

const Appointment = () => {
  return (
    <div>
      <div class="p-0 h-full bg-[url('/src/assets/images/appointment.png')]  my-32 ">
        <div class="hero-content text-left  flex-col lg:flex-row justify-center align-middle ">
          <div>
            <img className="mt-[-200px] mb-0" src={doctor} alt="" />
          </div>
          <div class="max-w-md">
            <p className="text-xl   font-bold text-secondary">Appointment</p>
            <h1 class="mb-5 text-3xl text-white font-bold">
              Make an appointment Today
            </h1>
            <p class="mb-5 text-white">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Provident cupiditate voluptatem et in. Quaerat
              fugiat ut assumenda excepturi exercitationem quasi. In deleniti
              eaque aut repudiandae et a id nisi.
            </p>
            <button class="btn btn-secondary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;