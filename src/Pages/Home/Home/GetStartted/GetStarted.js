import React from 'react';
import cardimg from '../../../../assets/images/treatment.png';

const GetStarted = () => {
  return (
    <div className='mx-28'>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row ">
          <img src={cardimg} class="max-w-sm rounded-lg shadow-2xl mr-24" />
          <div>
            <h1 class="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p class="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button class="btn btn-primary bg-gradient-to-r from-secondary  to-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;