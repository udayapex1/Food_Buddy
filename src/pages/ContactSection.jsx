import React from "react";
import contactImg from "../assets/contact-img.jpg";

const ContactSection = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center flex-wrap py-[5rem] gap-12"
      id="Contact">
      <div className="flex flex-col items-start justify-start gap-5 text-center md:text-left">
        <h2 className="text-[17px] font-bold text-[#FF9800]">CONTACT</h2>
        <h1 className="text-4xl md:text-5xl font-medium">
          Get In Touch With Us.
        </h1>
        <p className="text-[#878794] font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          viverra orci sed risus tincidunt tempor. Nulla malesuada vestibulum
          nibh.
        </p>
        <img
          className="w-full md:w-[450px] h-auto md:h-[280px] rounded-2xl mt-5"
          src={contactImg}
          alt="Contact"
        />
      </div>
      <div className="p-6 md:p-12 shadow-xl rounded-xl w-full md:w-auto">
        <form className="flex flex-col justify-center gap-5">
          <div className="flex flex-col md:flex-row gap-5">
            <label className="flex flex-col w-full md:w-1/2">
              <span className="block text-sm font-medium text-slate-700">
                First Name
              </span>
              <input
                type="text"
                placeholder="Enter your first name..."
                className="mt-1 px-4 py-3 bg-white border border-slate-300 rounded-3xl focus:outline-none focus:border-[#FF9800] focus:ring-[#FF9800] focus:ring-1 placeholder:text-slate-500"
              />
            </label>
            <label className="flex flex-col w-full md:w-1/2">
              <span className="block text-sm font-medium text-slate-700">
                Last Name
              </span>
              <input
                type="text"
                placeholder="Enter your last name..."
                className="mt-1 px-4 py-3 bg-white border border-slate-300 rounded-3xl focus:outline-none focus:border-[#FF9800] focus:ring-[#FF9800] focus:ring-1 placeholder:text-slate-500"
              />
            </label>
          </div>
          <label className="flex flex-col">
            <span className="block text-sm font-medium text-slate-700">
              Email
            </span>
            <input
              type="email"
              placeholder="Enter your email..."
              className="mt-1 px-4 py-3 bg-white border border-slate-300 rounded-3xl focus:outline-none focus:border-[#FF9800] focus:ring-[#FF9800] focus:ring-1 placeholder:text-slate-500"
            />
          </label>
          <label className="flex flex-col">
            <span className="block text-sm font-medium text-slate-700">
              Message
            </span>
            <textarea
              placeholder="Enter your message..."
              className="mt-1 px-4 py-3 bg-white border border-slate-300 rounded-3xl focus:outline-none focus:border-[#FF9800] focus:ring-[#FF9800] focus:ring-1 placeholder:text-slate-500 resize-none"
              rows="4"
            />
          </label>
          <button className="py-3 px-7 rounded-full bg-[#FF9800] font-medium hover:border border-[#FF9800] hover:bg-white opacity-90 transition duration-500 ease-in-out">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
