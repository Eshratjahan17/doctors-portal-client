import React from 'react';

const Testomonial = ({reviwe}) => {

  return (
    <div >
      <div class="card w-96 bg-base-100 shadow-xl  ">
        <div>
          <div class="card-body">
            <p>{reviwe.text}</p>
          </div>
          <div className="flex">
            <figure>
              <img
                className="rounded-[200px] w-32"
                src={reviwe.img}
                alt="Shoes"
              />
            </figure>
            <div>
              <h2 class="card-title">{reviwe.name}</h2>
              <p>{reviwe.city}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testomonial;