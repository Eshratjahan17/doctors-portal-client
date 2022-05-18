import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Testomonial from '../Testomonial';

const Testomonials = () => {
  const reviwes = [
    {
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      city: "california",
      img: people1
    },
    {
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      city: "california",
      img: people2
    },
    {
      text: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      name: "Winson Herry",
      city: "california",
      img: people3
    }
  ];
  return (
    <div>
      <div className="mt-10 header">
        <h3 className="text-xl  text-left font-bold text-secondary ">
          Testomonial
        </h3>
        <h1 className="text-3xl text-left font-normal text-accent ">
          What our petients Says
        </h1>
      </div>
      <div className="grid-rows-3  grid lg:grid-rows-1  grid-flow-col gap-4">
        {reviwes.map((reviwe) => (
          <Testomonial reviwe={reviwe}></Testomonial>
        ))}
      </div>
    </div>
  );
};

export default Testomonials;