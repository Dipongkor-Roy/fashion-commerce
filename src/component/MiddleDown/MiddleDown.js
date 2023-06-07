import React from 'react';
import image from '../../Assets/sunny-ng-B5Uo7GcVE1I-unsplash 1.png'
const MiddleDown = () => {
  return (
    <div className="min-h-screen">
    <div className=" grid place-content-end ">
      <img src={image} alt='' className=" max-w-sm rounded-lg shadow-2xl h-3/4" />
    </div>
  </div>
  );
};

export default MiddleDown;