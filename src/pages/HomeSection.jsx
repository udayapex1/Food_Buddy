import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import headerImg1 from "../assets/uliana-kopanytsia.png";
import headerImg2 from "../assets/pexels-polina.png";
import headerImg3 from "../assets/jonathan-borba.png";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import ReviewSection from "./ReviewSection";
import ContactSection from "./ContactSection";
import FoodContainer from "../components/FoodContainer";
import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <>
      <div className="">
        <div
          className="header flex flex-col md:flex-row items-center md:items-start sm:mt-10 md:mt-8 gap-5"
          id="Home">
          <div className="h-auto md:h-[25rem] m-4 md:m-20 text-center md:text-left">
            <h2 className="text-[17px] font-bold text-[#FF9800] mb-4">
              WELCOME TO BUDDY FOOD
            </h2>
            <h1 className="text-4xl md:text-6xl font-medium leading-tight md:leading-[75px] mb-5">
              Giving your Hunger <br className="hidden md:block" /> a new Option
            </h1>
            <p className="text-[#7c7c8b] font-normal mb-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <br className="hidden md:block" />
              Phasellus viverra orci sed risus tincidunt tempor. Nulla{" "}
              <br className="hidden md:block" />
              malesuada vestibulum nibh.
            </p>
            <Link
              to="/Popular"
              className="inline-block py-[14px] px-8 rounded-full bg-[#FF9800] font-medium hover:border border-[#FF9800] hover:bg-white opacity-90 cursor-pointer transition duration-500 ease-in-out">
              Get Order <ArrowRightAltIcon />
            </Link>
          </div>
          <div className="relative flex items-center justify-center h-[34rem] sm:h-[25rem] md:h-[34rem] mt-4 md:mt-0">
            {/* <div className="absolute flex items-end justify-end z-[2]">
            <img
              className="max-w-[10rem] sm:max-w-[12rem] md:max-w-[16rem]"
              src={headerImg3}
              alt=""
            />
          </div>
          <div className="absolute flex items-center justify-center">
            <img
              className="max-w-[12rem] sm:max-w-[14rem] md:max-w-md"
              src={headerImg2}
              alt=""
            />
          </div>
          <div className="absolute flex items-start justify-start ml-24 md:ml-48 mt-[-4rem] md:mt-[-5rem]">
            <img
              className="max-w-[8rem] sm:max-w-[10rem] md:max-w-[14rem]"
              src={headerImg1}
              alt=""
            />
          </div> */}
          </div>
        </div>
        <AboutSection />
        <FoodContainer />
        <ServicesSection />
        <ReviewSection />
        <ContactSection />
      </div>
    </>
  );
};

export default HomeSection;
