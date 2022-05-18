import React from 'react';
import cavity from '../../../assets/images/cavity.png';
import flouride from '../../../assets/images/fluoride.png';
import whitening from '../../../assets/images/whitening.png';
import GetStarted from '../Home/GetStartted/GetStarted';
import Service from '../Service/Service';


const Services = () => {
  return (
    <div className="">
      <div className="mt-10 header">
        <h3 className="text-xl  text-center font-bold text-secondary ">
          Our Services
        </h3>
        <h1 className="text-3xl text-center font-normal text-accent ">
          Services we provide
        </h1>
      </div>
      <div className="grid grid-rows-4 lg:grid-rows-1  grid-flow-col gap-3  mt-8 ">
        <Service
          cardText="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
          cardTitle="Fluoride Treatment"
          img={flouride}
        ></Service>
        <Service
          cardText="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
          cardTitle="Cavity Filling"
          img={cavity}
        ></Service>
        <Service
          cardText="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
          cardTitle="Teeth Whitening"
          img={whitening}
        ></Service>
      </div>
      <GetStarted></GetStarted>
    </div>
  );
};

export default Services;