import { useState } from "react";
import { Link } from "react-router-dom";
import LOGO from "../assets/LightLogo.png";
import menu from "../assets/menu.png";
import cancel from "../assets/cancle.png";
import cv from "../assets/MY CV.pdf"
const NavBar = () => {
  const [clicked, setclicked] = useState(false);
  return (
    <>
      <div className="nav flex justify-between items-center bg-transparent p-4   border-b border-blueColor absolute  w-full backdrop-blur-sm ">
        <div className="logo">
          <Link to="/NouryAtefNewPortfolio">
            <img src={LOGO} alt="LOGO" />
          </Link>
        </div>
        <div
          className={`links lg:flex hidden gap-10 font-SpaceGrotesk text-blueColor font-semibold cursor-pointer `}
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
          <div className="bg-blueColor lg:block hidden  font-SpaceGrotesk font-bold text-white text-xl px-6 py-3 hover:bg-white hover:text-blueColor transition duration-500 cursor-pointer">
          <a href={cv}>Download CV</a>
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
      </div>
      {clicked ? (
        <div
          className={`links flex flex-col lg:hidden  gap-3 font-Iner text-blueColor font-semibold cursor-pointer backdrop-blur-sm p-3 absolute top-24 w-full `}
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
      ) : (
        ""
      )}
    </>
  );
};

export default NavBar;
