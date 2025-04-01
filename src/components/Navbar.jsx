import React, { useContext, useState } from "react";
import logoIcon from "../assets/Buddy-Food-logos.png";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import FoodContext from "../context/FoodContext";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setisMenuOpen(!isMenuOpen); // Toggle the menu state
  };

  const navItems = [
    { path: "/", title: "Home" },
    { path: "/About", title: "About" },
    { path: "/Popular", title: "Popular" },
    { path: "/Services", title: "Services" },
    { path: "/Review", title: "Review" },
    { path: "/Contact", title: "Contact" },
    `  `,
  ];

  const { cartItems } = useContext(FoodContext);
  return (
    <>
      <div className="bg-[#FFFFFF] flex items-center justify-around py-4 md:py-3 sm:py-1 sticky top-0 z-10  border    shadow-[0_1px_20px_black] ">
        <div className="flex items-center justify-center">
          <img className="h-[95px]" src={logoIcon} alt="" />
          <Link
            to="/"
            className="text-[26px] font-bold leading-6 cursor-pointer">
            Buddy <br />
            <span className="tracking-widest text-[#FF9800]">Food</span>
          </Link>
        </div>
        <div className="md:flex hidden">
          <ul className="flex items-center justify-between gap-10 ">
            {navItems.map(({ path, title }) => (
              <li className=" ">
                <NavLink
                  className="font-semibold hover:text-[#FF9800] transition duration-500 ease-in-out"
                  to={path}>
                  {title}
                </NavLink>
              </li>
            ))}

            {/* <li>
              <NavLink
                className="font-semibold hover:text-[#FF9800] transition duration-500 ease-in-out"
                to="/About">
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-semibold hover:text-[#FF9800] transition duration-500 ease-in-out"
                to="/Popular">
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-semibold hover:text-[#FF9800] transition duration-500 ease-in-out"
                to="/Services">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-semibold hover:text-[#FF9800] transition duration-500 ease-in-out"
                to="/Review">
                Review
              </NavLink>
            </li>
            <li>
              <NavLink
                className="font-semibold hover:text-[#FF9800] transition duration-500 ease-in-out"
                to="/Contact">
                Contact
              </NavLink>
            </li> */}
          </ul>
        </div>
        <div className="flex items-center gap-5">
          <Link to="" className="md:block hidden cursor-pointer">
            <PersonIcon sx={{ fontSize: 27 }} />
          </Link>
          <Link to="/Cart" className="cursor-pointer relative">
            <ShoppingCartIcon sx={{ fontSize: 27 }} />
            <span className="absolute top-[-5px] right-[-10px] bg-[#FF9800] font-semibold rounded-full h-[18px] w-[18px] flex items-center justify-center">
              {cartItems.length}
            </span>
          </Link>
          <span className="md:hidden cursor-pointer">
            <button onClick={handleMenuToggler}>
              {isMenuOpen ? (
                <MenuIcon sx={{ fontSize: 27 }} />
              ) : (
                <MenuIcon sx={{ fontSize: 27 }} />
              )}
            </button>
          </span>
        </div>
      </div>
      {/* for small devices */}
      <div
        className={`  px-4 bg-gradient-to-r from-gray-700 to-black py-5 rounded-xl text-white ${
          isMenuOpen ? "" : "hidden"
        }`}>
        <ul>
          {navItems.map(({ path, title }) => (
            <li>
              <NavLink
                className="font-semibold hover:text-[#FF9800] transition duration-500 ease-in-out"
                to={path}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
