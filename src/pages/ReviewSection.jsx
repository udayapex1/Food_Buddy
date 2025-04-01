import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import customerOne from "../assets/womans-portrait.jpg";
import customerTwo from "../assets/serious-business-man.jpg";
import customerThree from "../assets/woman-in-a-gray.jpg";
import customerFour from "../assets/beautiful-young-woman.jpg";

const ReviewSection = () => {
  return (
    <div
      className="flex flex-col items-center justify-center flex-wrap py-[3rem] bg-[#F8F6EC]"
      id="Review"
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-[17px] font-bold text-[#FF9800]">TESTIMONIALS</h2>
        <h1 className="text-5xl font-medium">What Customers Say About Us.</h1>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 mt-12 flex-wrap">
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <div className="flex flex-col justify-center gap-4 shadow-xl p-12 rounded-[45px]">
            <FormatQuoteIcon style={{ fontSize: "65px", color: "#FF9800" }} />
            <p className="text-[#878794] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              viverra <br /> sem ac dolor sollicitudin ullam corper. Vesti bulum
              pretium neque <br /> nec ultricies ultricies. Nam vitae diam
              facilisis, egestas massa sed, <br /> laoreet justo.
            </p>
            <div className="flex items-start justify-start gap-4 mt-5">
              <img
                className="w-14 h-14 rounded-full"
                src={customerOne}
                alt=""
              />
              <span className="leading-6">
                <h2 className="font-semibold text-[18px]">Jane Smith</h2>
                <h3 className="text-[#FF9800] text-[17px]">Customer</h3>
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 shadow-xl p-12 rounded-[45px]">
            <FormatQuoteIcon style={{ fontSize: "65px", color: "#FF9800" }} />
            <p className="text-[#878794] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              viverra <br /> sem ac dolor sollicitudin ullam corper. Vesti bulum
              pretium neque <br /> nec ultricies ultricies. Nam vitae diam
              facilisis, egestas massa sed, <br /> laoreet justo.
            </p>
            <div className="flex items-start justify-start gap-4 mt-5">
              <img
                className="w-14 h-14 rounded-full"
                src={customerTwo}
                alt=""
              />
              <span className="leading-6">
                <h2 className="font-semibold text-[18px]">Samuel Jack</h2>
                <h3 className="text-[#FF9800] text-[17px]">Customer</h3>
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <div className="flex flex-col justify-center gap-4 shadow-xl p-16 rounded-[45px]">
            <FormatQuoteIcon style={{ fontSize: "65px", color: "#FF9800" }} />
            <p className="text-[#878794] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              viverra <br /> sem ac dolor sollicitudin ullam corper. Vesti bulum
              pretium neque <br /> nec ultricies ultricies. Nam vitae diam
              facilisis, egestas massa sed, <br /> laoreet justo.
            </p>
            <div className="flex items-start justify-start gap-4 mt-5">
              <img
                className="w-14 h-14 rounded-full"
                src={customerThree}
                alt=""
              />
              <span className="leading-6">
                <h2 className="font-semibold text-[18px]">Anna Tores</h2>
                <h3 className="text-[#FF9800] text-[17px]">Customer</h3>
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 shadow-xl p-16 rounded-[45px]">
            <FormatQuoteIcon style={{ fontSize: "65px", color: "#FF9800" }} />
            <p className="text-[#878794] font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              viverra <br /> sem ac dolor sollicitudin ullam corper. Vesti bulum
              pretium neque <br /> nec ultricies ultricies. Nam vitae diam
              facilisis, egestas massa sed, <br /> laoreet justo.
            </p>
            <div className="flex items-start justify-start gap-4 mt-5">
              <img
                className="w-14 h-14 rounded-full"
                src={customerFour}
                alt=""
              />
              <span className="leading-6">
                <h2 className="font-semibold text-[18px]">Lady Marrow</h2>
                <h3 className="text-[#FF9800] text-[17px]">Customer</h3>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <a
          className="py-[14px] px-8 rounded-full bg-[#FF9800] font-medium hover:border border-[#FF9800] hover:bg-white opacity-90 cursor-pointer transition duration-500 ease-in-out"
          href="#"
        >
          See More <ArrowRightAltIcon />
        </a>
      </div>
    </div>
  );
};

export default ReviewSection;
