import { memo } from "react";
import { Link } from "react-router-dom";
import me from "../assets/me.png";
import hero from "../assets/hero.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import behance from "../assets/behance.png";
import github from "../assets/github.png";

import "../styles/index.css";
const HomePage = () => {
  return (
    <>
      <div className="home h-screen flex justify-between  items-center sm:px-20 px-5">
        <div className="words">
          <div className="mb-16">
            <div className="text-blueColor font-SpaceGrotesk pt-20">
              <p className="text-4xl font-md ">Hi I'm </p>
              <h1 className="font-extrabold text-6xl pt-3 pb-5 font-Calistoga">
                Nourhan Atef{" "}
                <img src={hero} alt="hero" className="inline-block w-16" />
              </h1>
              <p className=" text-lg font-bold pb-10">
                Web developer / React Developer
              </p>
            </div>

            <div className="flex items-center gap-3 pt-10">
              <Link to="NouryAtefNewPortfolio/noury/contactMe">
                <div className="bg-white w-36  font-SpaceGrotesk font-bold text-blueColor text-md px-6 py-3 border-2 border-blueColor hover:bg-blueColor hover:text-white transition duration-300 cursor-pointer">
                  Say Hello
                </div>
              </Link>
              <Link to="NouryAtefNewPortfolio/noury/projects">
                <div className="underline hover:no-underline text-blueColor cursor-pointer">
                  My Work
                </div>
              </Link>
            </div>
          </div>

          <div className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="38"
              viewBox="0 0 48 38"
              fill="none"
              className="svg replaced-svg absolute "
            >
              <path
                d="M4.22133 34.1893C1.47467 31.272 0 28 0 22.696C0 13.3627 6.552 4.99733 16.08 0.861328L18.4613 4.536C9.568 9.34666 7.82933 15.5893 7.136 19.5253C8.568 18.784 10.4427 18.5253 12.28 18.696C17.0907 19.1413 20.8827 23.0907 20.8827 28C20.8827 30.4753 19.8993 32.8493 18.149 34.5997C16.3987 36.35 14.0247 37.3333 11.5493 37.3333C10.1804 37.3214 8.82756 37.0372 7.5695 36.4975C6.31143 35.9577 5.1733 35.1731 4.22133 34.1893ZM30.888 34.1893C28.1413 31.272 26.6667 28 26.6667 22.696C26.6667 13.3627 33.2187 4.99733 42.7467 0.861328L45.128 4.536C36.2347 9.34666 34.496 15.5893 33.8027 19.5253C35.2347 18.784 37.1093 18.5253 38.9467 18.696C43.7573 19.1413 47.5493 23.0907 47.5493 28C47.5493 30.4753 46.566 32.8493 44.8157 34.5997C43.0653 36.35 40.6914 37.3333 38.216 37.3333C36.8471 37.3214 35.4942 37.0372 34.2362 36.4975C32.9781 35.9577 31.84 35.1731 30.888 34.1893Z"
                fill="#FFD83A"
              ></path>
            </svg>
            <p className="relative text-blueColor font-semibold text-lg font-Iner italic">
              "I’m listen to your needs & thoughtfully interpret <br /> your
              requirements.“
            </p>
          </div>
        </div>
        <div className="photo ">
          <img src={me} alt="me" className="md:block hidden" />
          <div className="contacts flex flex-col gap-10 md:hidden px-2">
            <Link to="https://www.facebook.com/nony.atef.77" target="_blank">
              <div className="w-14 bg-white rounded-full p-4">
                <img src={facebook} alt="facebook" />
              </div>
            </Link>
            <Link
              to="https://www.linkedin.com/in/nourhan-atef-54630b1b1/"
              target="_blank"
            >
              <div className="w-14 bg-white rounded-full p-4">
                <img src={linkedin} alt="linkedin" />
              </div>
            </Link>
            <Link to="https://www.behance.net/nourhan20/" target="_blank">
              <div className="w-14 bg-white rounded-full p-4">
                <img src={behance} alt="behance" />
              </div>
            </Link>
            <Link to="https://github.com/Nourhaan-Atef" target="_blank">
              <div className="w-14 bg-white rounded-full p-3">
                <img src={github} alt="github" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(HomePage);
