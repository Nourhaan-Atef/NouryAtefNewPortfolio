import { useState } from "react";
import { NavLink } from "react-router-dom";
import LOGO from "../assets/LightLogo.png";
import menu from "../assets/menu.png";
import cancel from "../assets/cancle.png";
import cv from "../assets/MY CV.pdf";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import behance from "../assets/behance.png";
import github from "../assets/github.png";
import { motion as m } from "framer-motion";

const NavBar = () => {
  const [clicked, setclicked] = useState(false);

  return (
    <>
      <m.div
        initial={{ y: "-100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        exit={{ opacity: 0 }}
        className="nav flex justify-between items-center bg-transparent py-4 sm:px-20 px-5 border-b border-blueColor fixed w-full backdrop-blur-sm z-10"
      >
        <div className="logo flex justify-center items-center">
          <NavLink to="/NouryAtefNewPortfolio">
            <img src={LOGO} alt="LOGO" className="h-14" />
          </NavLink>
        </div>
        <div
          className={`links lg:flex hidden gap-10 font-SpaceGrotesk text-white font-semibold cursor-pointer `}
        >
          <NavLink to="/NouryAtefNewPortfolio" className="link" end>
            Home
          </NavLink>
          <NavLink to="NouryAtefNewPortfolio/noury/aboutMe" className="link">
            About
          </NavLink>
          <NavLink to="NouryAtefNewPortfolio/noury/contactMe" className="link">
            Contact
          </NavLink>
          <NavLink to="NouryAtefNewPortfolio/noury/projects" className="link">
            Projects
          </NavLink>
        </div>
        <div className="cv flex justify-center items-center">
          <span className="relative lg:flex h-4 w-4 -top-6 left-44  hidden ">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellowcolor opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-yellowcolor"></span>
          </span>
          <div className="bg-blueColor lg:block hidden  font-SpaceGrotesk font-bold text-white text-xl px-6 py-3 hover:bg-white hover:text-blueColor transition duration-500 cursor-pointer">
            <a href={cv} target="_blank" rel="noreferrer">
              Download CV
            </a>
          </div>
        </div>
        <div className="menu lg:hidden flex justify-end cursor-pointer">
          <img
            src={clicked ? cancel : menu}
            alt="menu"
            width={clicked ? "30px" : "40px"}
            height={clicked ? "30px" : "40px"}
            onClick={() => setclicked(!clicked)}
          />
        </div>
      </m.div>
      {clicked ? (
        <m.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className={`links flex flex-col items-center lg:hidden  gap-3 font-Iner text-blueColor font-semibold cursor-pointer backdrop-blur-sm p-3 fixed top-24 w-full z-10 `}
        >
          <NavLink
            to="/NouryAtefNewPortfolio"
            className="link"
            end
            onClick={() => setclicked(!clicked)}
          >
            Home
          </NavLink>
          <NavLink
            to="NouryAtefNewPortfolio/noury/aboutMe"
            className="link"
            onClick={() => setclicked(!clicked)}
          >
            About
          </NavLink>
          <NavLink
            to="NouryAtefNewPortfolio/noury/contactMe"
            className="link"
            onClick={() => setclicked(!clicked)}
          >
            Contact
          </NavLink>
          <NavLink
            to="NouryAtefNewPortfolio/noury/projects"
            className="link"
            onClick={() => setclicked(!clicked)}
          >
            Projects
          </NavLink>
          <div className="icons">
            <div className="contacts flex justify-center  gap-5 px-2">
              <NavLink
                to="https://www.facebook.com/nony.atef.77"
                target="_blank"
              >
                <div className="w-12 bg-white rounded-full p-4 hover:bg-yellowcolor transition duration-300 hover:-translate-y-3 ">
                  <img src={facebook} alt="facebook" />
                </div>
              </NavLink>
              <NavLink
                to="https://www.linkedin.com/in/nourhan-atef-54630b1b1/"
                target="_blank"
              >
                <div className="w-12 bg-white rounded-full p-4 hover:bg-yellowcolor transition duration-300 hover:-translate-y-3">
                  <img src={linkedin} alt="linkedin" />
                </div>
              </NavLink>
              <NavLink to="https://www.behance.net/nourhan20/" target="_blank">
                <div className="w-12 bg-white rounded-full p-4 hover:bg-yellowcolor transition duration-300 hover:-translate-y-3">
                  <img src={behance} alt="behance" />
                </div>
              </NavLink>
              <NavLink to="https://github.com/Nourhaan-Atef" target="_blank">
                <div className="w-12 bg-white rounded-full p-3 hover:bg-yellowcolor transition duration-300 hover:-translate-y-3">
                  <img src={github} alt="github" />
                </div>
              </NavLink>
            </div>
          </div>
        </m.div>
      ) : (
        ""
      )}
    </>
  );
};

export default NavBar;
