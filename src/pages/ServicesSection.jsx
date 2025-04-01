import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import foodDelivery from "../assets/food-delivery.png";
import support from "../assets/24-support.png";
import freeDelivery from "../assets/free-delivery.png";

const ServicesSection = () => {
  return (
    <div
      className="flex flex-col items-center justify-center flex-wrap py-[3rem]"
      id="Services"
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-[17px] font-bold text-[#FF9800]">OUR SERVICES</h2>
        <h1 className="text-5xl font-medium">
          Filling Your Tummy is What We Care About.
        </h1>
        <p className="text-[#878794] font-normal text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          viverra orci sed risus tincidunt <br /> tempor. Nulla malesuada
          vestibulum nibh.
        </p>
      </div>
      <div className="flex items-center justify-center gap-8 mt-12 flex-wrap">
        <div className="flex flex-col items-center justify-center gap-4 shadow-xl p-16 rounded-[45px]">
          <img className="w-24 h-24" src={foodDelivery} alt="" />
          <h2 className="text-2xl font-bold mt-4">Food Delivery</h2>
          <p className="text-[#878794] font-normal text-center">
            Lorem ipsum dolor sit amet, consec <br /> tetur adipiscing elit.
          </p>
          <a
            className="mt-4 py-[14px] px-8 rounded-full bg-[#FF9800] font-medium hover:border border-[#FF9800] hover:bg-white opacity-90 cursor-pointer transition duration-500 ease-in-out"
            href="#"
          >
            Order Now <ArrowRightAltIcon />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 shadow-xl p-16 rounded-[45px]">
          <img className="w-24 h-24" src={support} alt="" />
          <h2 className="text-2xl font-bold mt-4">24/7 Support</h2>
          <p className="text-[#878794] font-normal text-center">
            Lorem ipsum dolor sit amet, consec <br /> tetur adipiscing elit.
          </p>
          <a
            className="mt-4 py-[14px] px-8 rounded-full bg-[#FF9800] font-medium hover:border border-[#FF9800] hover:bg-white opacity-90 cursor-pointer transition duration-500 ease-in-out"
            href="#"
          >
            Order Now <ArrowRightAltIcon />
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 shadow-xl p-16 rounded-[45px]">
          <img className="w-24 h-24" src={freeDelivery} alt="" />
          <h2 className="text-2xl font-bold mt-4">Free Delivery</h2>
          <p className="text-[#878794] font-normal text-center">
            Lorem ipsum dolor sit amet, consec <br /> tetur adipiscing elit.
          </p>
          <a
            className="mt-4 py-[14px] px-8 rounded-full bg-[#FF9800] font-medium hover:border border-[#FF9800] hover:bg-white opacity-90 cursor-pointer transition duration-500 ease-in-out"
            href="#"
          >
            Order Now <ArrowRightAltIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
