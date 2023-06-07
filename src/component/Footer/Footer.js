import React from 'react';
import image from "../../Assets/Component 3.png";
import Cards from '../Cards/Cards';
const Footer = () => {
  return (
    <div className="min-h-screen mb-0">
      <div className="flex items-center flex-col-reverse lg:flex-row ">
        <img src={image} alt="Footer"className="max-w-lg mb-0 " />
        <div className="mx-5 content-center ">
         <Cards></Cards>
        </div>
      </div>
    </div>
  );
};

export default Footer;