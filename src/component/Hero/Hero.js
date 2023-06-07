import React from "react";
import Image from "../../Assets/Component 2.png";

const Hero = () => {
  return (
    <div>
      <div className="hero my-3 min-h-screen ">
        <div className="content-center">
          <img src={Image} alt="hero" />
        </div>
      </div>
      <button className="mt-3 btn btn-outline btn-black hover: btn-black italic text-orange-600 ">
        SHOP NOW
      </button>
    </div>
  );
};

export default Hero;
