import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import aboutImg from "../assets/about-img.jpg";

const AboutSection = () => {
  return (
    <div
      className="bg-[#F8F6EC] flex items-center justify-center flex-wrap gap-14 p-[6rem] sm:gap-y-10"
      id="About"
    >
      <div className="flex items-center justify-center">
        <img
          className="w-[600px] h-[450px] rounded-3xl object-cover transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          src={aboutImg}
          alt="About Image"
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-3">
        <h2 className="text-[18px] font-bold text-[#FF9800]">
          ABOUT BUDDY FOOD
        </h2>
        <h1 className="text-5xl font-medium leading-[60px]">
          Your Favourite Food <br /> delivery Partner.
        </h1>
        <p className="text-[#878794] font-normal mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          viverra orci <br /> sed risus tincidunt tempor. Nulla malesuada
          vestibulum nibh. Donec iaculis, <br /> augue ac imperdiet accumsan,
          purus enim dictum lectus, vitae mattis augue <br /> erat vitae leo.
          Fusce tempor erat quis odio porttitor semper.
        </p>
        <a
          className="mt-8 py-[12px] px-7 rounded-full bg-[#FF9800] font-medium hover:border border-[#FF9800] hover:bg-white opacity-90 cursor-pointer transition duration-500 ease-in-out"
          href="#"
        >
          Get Started <ArrowRightAltIcon />
        </a>
      </div>
    </div>
  );
};

export default AboutSection;
