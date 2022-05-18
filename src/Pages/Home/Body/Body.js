import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import chairimg from '../../../assets/images/chair.png';
import Services from '../Services/Services';

const Body = () => {
  return (
    <div className="">
      <div class="hero min-h-screen  bg-[url('/src/assets/images/bg.png')] ">
        <div class="hero-content flex-col lg:flex-row-reverse ">
          <img src={chairimg} class="max-w-sm rounded-lg shadow-2xl  ml-10" />
          <div className="w-3/6">
            <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p class="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button class="btn bt-primary border-none uppercase text-white bg-gradient-to-r from-secondary  to-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className="grid grid-rows-4 lg:grid-rows-1  grid-flow-col gap-4  mx-6 mt-8  ">
        <div class="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary  to-primary w-96">
          <figure>
            <img className="ml-3" src={clock} alt="clock" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Opening Hours</h2>
            <p>Lorem Ipsum is simply dummy text of the pri</p>
          </div>
        </div>
        <div class="card  lg:card-side   shadow-xl bg-gradient-to-r from-secondary  to-primary w-96">
          <figure className="bg-accent">
            <img className="ml-3" src={marker} alt="clock" />
          </figure>
          <div class="card-body bg-accent text-white">
            <h2 class="card-title">Visit our location</h2>
            <p>Brooklyn, NY 10036, United States</p>
          </div>
        </div>
        <div class="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary  to-primary w-96">
          <figure>
            <img className="ml-3" src={phone} alt="clock" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Contact us now</h2>
            <p>Lorem Ipsum is simply dummy text of the pri</p>
          </div>
        </div>
      </div>
      <div className="mt-36 mx-12 ">
        <Services></Services>
      </div>
    </div>
  );
};

export default Body;