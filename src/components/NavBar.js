import { useState } from "react";
import { Link } from "react-router-dom";
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
        className="nav flex justify-between items-center bg-transparent p-4  border-b border-blueColor fixed w-full backdrop-blur-sm   z-10"
      >
        <div className="logo">
          <Link to="/NouryAtefNewPortfolio">
            <img src={LOGO} alt="LOGO" />
          </Link>
        </div>
        <div
          className={`links  lg:flex hidden gap-10 font-SpaceGrotesk text-blueColor font-semibold cursor-pointer `}
        >
          <Link to="/NouryAtefNewPortfolio">
            <div className="link">Home</div>
          </Link>
          <Link to="NouryAtefNewPortfolio/noury/aboutMe">
            <div className="link">About</div>
          </Link>
          <Link to="NouryAtefNewPortfolio/noury/contactMe">
            <div className="link">Contact</div>
          </Link>
          <Link to="NouryAtefNewPortfolio/noury/projects">
            <div className="link">Projects</div>
          </Link>
        </div>
        <div className="cv">
          <span className="relative lg:flex h-4 w-4 top-3 left-40  hidden ">
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
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className={`links flex flex-col items-center lg:hidden  gap-3 font-Iner text-blueColor font-semibold cursor-pointer backdrop-blur-sm p-3 fixed top-24 w-full z-10`}
        >
          <Link to="/NouryAtefNewPortfolio">
            <div className="link">Home</div>
          </Link>
          <Link to="NouryAtefNewPortfolio/noury/aboutMe">
            <div className="link">About</div>
          </Link>
          <Link to="NouryAtefNewPortfolio/noury/contactMe">
            <div className="link">Contact</div>
          </Link>
          <Link to="NouryAtefNewPortfolio/noury/projects">
            <div className="link">Projects</div>
          </Link>
          <div className="icons">
            <div className="contacts flex justify-center  gap-5 px-2">
              <Link to="https://www.facebook.com/nony.atef.77" target="_blank">
                <div className="w-12 bg-white rounded-full p-4 hover:bg-yellowcolor transition duration-300 hover:-translate-y-3 ">
                  <img src={facebook} alt="facebook" />
                </div>
              </Link>
              <Link
                to="https://www.linkedin.com/in/nourhan-atef-54630b1b1/"
                target="_blank"
              >
                <div className="w-12 bg-white rounded-full p-4 hover:bg-yellowcolor transition duration-300 hover:-translate-y-3">
                  <img src={linkedin} alt="linkedin" />
                </div>
              </Link>
              <Link to="https://www.behance.net/nourhan20/" target="_blank">
                <div className="w-12 bg-white rounded-full p-4 hover:bg-yellowcolor transition duration-300 hover:-translate-y-3">
                  <img src={behance} alt="behance" />
                </div>
              </Link>
              <Link to="https://github.com/Nourhaan-Atef" target="_blank">
                <div className="w-12 bg-white rounded-full p-3 hover:bg-yellowcolor transition duration-300 hover:-translate-y-3">
                  <img src={github} alt="github" />
                </div>
              </Link>
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
