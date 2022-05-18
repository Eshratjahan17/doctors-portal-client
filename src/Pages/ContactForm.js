import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex items-center flex-col bg-[url('/src/assets/images/appointment.png')]">
      <div className="mt-10 header">
        <h3 className="text-xl  text-center font-bold text-secondary ">
          Contact us
        </h3>
        <h1 className="text-3xl text-center font-normal text-white ">
          Stay connected with us
        </h1>
      </div>
      <form className="grid grid-cols-1 justify-items-center gap-3  mb-9 mt-9 ">
        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered input-xs w-full max-w-md  "
        />

        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered input-sm  w-full max-w-md "
        />

        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered input-md w-full max-w-md "
        />

        <input
          type="text"
          placeholder="Type here"
          class="input input-bordered input-lg w-full max-w-md "
        />
        <button class="btn btn-primary bg-gradient-to-r from-secondary  to-primary">
          Get Started
        </button>
      </form>
    </div>
  );
};

export default ContactForm;