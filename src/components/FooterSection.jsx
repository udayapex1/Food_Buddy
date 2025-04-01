import React from "react";
import logosIcon from "../assets/Buddy-Food-circle.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="flex flex-col justify-around flex-wrap gap-16 py-10 bg-black">
      <div className="flex justify-center gap-40 flex-wrap sm:flex-col sm:gap-16 md:flex-row md:gap-32 lg:flex-row lg:gap-40">
        <div className="flex justify-center gap-32 flex-wrap ">
          <div className="text-white">
            <span className="flex items-center justify-start gap-2">
              <span className="rounded-full">
                <img className="h-[70px]" src={logosIcon} alt="" />
              </span>
              <h2 className="text-[26px] font-bold leading-6 cursor-pointer">
                Buddy <br />
                <span className="tracking-widest text-[#FF9800]">Food</span>
              </h2>
            </span>
            <p className="text-[16.1px] text-slate-100 font-normal mt-7">
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              Nullam <br /> in nibh vehicula.
            </p>
          </div>
          <div className="text-white">
            <h2 className="text-[22px] font-bold">Get In Touch</h2>
            <div className="text-[16.1px] mt-6 flex flex-col justify-center gap-4">
              <span>
                <p>
                  <LocationOnIcon style={{ color: "#FF9800" }} /> India
                </p>
              </span>
              <span>
                <p>
                  <EmailIcon style={{ color: "#FF9800" }} />
                  {"  "} udaypareta645@gmail.com
                </p>
              </span>
              <span>
                <p>
                  <CallIcon style={{ color: "#FF9800" }} /> +91 1234 567 890
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-32 flex-wrap">
          <div className="text-white">
            <h2 className="text-[22px] font-bold">Quicklinks</h2>
            <span className="text-[16.1px] mt-6 flex flex-col justify-center gap-3">
              <Link
                className="hover:text-[#FF9800] transition duration-500 ease-in-out"
                to="/">
                Home
              </Link>
              <Link
                className="hover:text-[#FF9800] transition duration-500 ease-in-out"
                to="/About">
                About
              </Link>
              <Link
                className="hover:text-[#FF9800] transition duration-500 ease-in-out"
                to="/Popular">
                Popular
              </Link>
              <Link
                className="hover:text-[#FF9800] transition duration-500 ease-in-out"
                to="/Services">
                Services
              </Link>
              <Link
                className="hover:text-[#FF9800] transition duration-500 ease-in-out"
                to="/Review">
                Review
              </Link>
              <Link
                className="hover:text-[#FF9800] transition duration-500 ease-in-out"
                to="/Contact">
                Contact
              </Link>
            </span>
          </div>
          <div className="text-white">
            <h2 className="text-[22px] font-bold">Follow Us</h2>
            <span className="mt-6 flex gap-5">
              <a
                className="border border-slate-600 p-[8px] rounded-full hover:bg-slate-800"
                href="#">
                <FacebookIcon style={{ color: "#FF9800" }} />
              </a>
              <a
                className="border border-slate-600 p-[8px] rounded-full hover:bg-slate-800"
                href="#">
                <YouTubeIcon style={{ color: "#FF9800" }} />
              </a>
              <a
                className="border border-slate-600 p-[8px] rounded-full hover:bg-slate-800"
                href="#">
                <InstagramIcon style={{ color: "#FF9800" }} />
              </a>
              <a
                className="border border-slate-600 p-[8px] rounded-full hover:bg-slate-800"
                href="#">
                <LinkedInIcon style={{ color: "#FF9800" }} />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-white">
        <p>Copyright © 2023 By Udy-solutions </p>
        <span className="border border-white mx-4"></span>
        <span className="flex justify-center gap-2">
          <a
            className="hover:text-[#FF9800] transition duration-500 ease-in-out"
            href="#">
            All Rights Reserved
          </a>
        </span>
      </div>
    </footer>
  );
};

export default FooterSection;
