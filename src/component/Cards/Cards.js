import React from 'react';
import image from "../../Assets/Rectangle 1.png";
import image2 from "../../Assets/Rectangle 2.png";
import image3 from "../../Assets/Rectangle 3.png";
import './Cards.css'
const Cards = () => {
  return (
    <div className="sm:flex-row lg:flex flex-wrap gap-3">
    <div className="mb-3 card card-compact w-60 shadow-xl rounded-xl">
      <div className="image">
        <figure>
          <img src={image} alt="Dress" className="h-60 rounded-xl" />
        </figure>
      </div>
      <div className="card-body">
        <p className="text-2xl italic text-black">
          Atbleisure <span>White Tank Top</span>{" "}
        </p>
      </div>
    </div>
    <div className="mb-3 card card-compact w-60 shadow-xl rounded-xl">
      <div className="image">
        <figure>
          <img src={image2} alt="Dress" className="h-60 rounded-xl" />
        </figure>
      </div>
      <div className="card-body">
        <p className="text-2xl italic text-black">
          White Linen
          <span>Coat</span>{" "}
        </p>
      </div>
    </div>
    <div className="mb-3 card card-compact w-60 shadow-xl rounded-xl">
      <div className="image">
        <figure>
          <img src={image3} alt="Dress" className="h-60 rounded-xl" />
        </figure>
      </div>
      <div className="card-body">
        <p className="text-2xl italic text-black">
          Orange <span>Summer Dress</span>{" "}
        </p>
      </div>
    </div>
  </div>
  );
};

export default Cards;
