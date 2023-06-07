import React from 'react';
import image from '../../Assets/Component 1.png';

const Middle = () => {
  return (
    <div className="hero min-h-screen">
    <div className=" hero-content place-content-start  flex-col lg:flex-row  ">
      <img src={image} alt="" className=" max-w-sm  " />
      <div className="">
        <p className="text-5xl text-black mt-2">
          {" "}
          <span className="text-orange-600 italic">Can't </span>TAME THE NEW{" "}
          <span className="text-orange-600 italic">Untamable</span>
        </p>

       <div className="items-end">
       <button className="mt-4 btn btn-link italic">Shop The Look</button>
       
       </div>
       
      </div>
    </div>
   

</div>
  );
};

export default Middle;