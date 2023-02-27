import FWDREACT from "../assets/FWD React.PNG";
import FWDWEBCHALLENGER from "../assets/FWD WebChallenger.PNG";
import ITI from "../assets/iti.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/js.png";
import bootstrab from "../assets/bootsrtab.png";
import tailwind from "../assets/tailwind.png";
import redux from "../assets/Redux.png";
import react from "../assets/react.png";
import git from "../assets/git.png";
import java from "../assets/java.png";
import c from "../assets/c++.png";
import figma from "../assets/figma.png";

import responsive from "../assets/responsive.avif";
const Experience = () => {
  return (
    <>
      <div className="experience h-full  flex flex-col justify-center items-center pt-32">
        <div className="certificate">
          <h1 className="text-5xl font-SpaceGrotesk font-extrabold text-center text-yellowcolor mb-16">
            Certificates
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-10 xs:my-3 my-0">
            <div className="border-2 border-blueColor p-2 rounded-2xl flex flex-col justify-center ">
              <img src={FWDREACT} alt="FWD REACT" className="rounded-xl " />
              <div className="description">
                <div className="pt-5 text-white text-center font-bold text-xl font-SpaceGrotesk">
                  <p>React Development Cross-Skilling</p>
                </div>
                <div className="px-2 flex justify-between font-bold font-SpaceGrotesk py-3">
                  <p className="text-cyancolor bg-white px-4 py-1 rounded-lg">
                    UDACITY
                  </p>
                  <p className="text-blueColor">December 2022</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-blueColor p-2 rounded-2xl flex flex-col justify-center ">
              <img
                src={ITI}
                alt="ITI Frontend development"
                className="rounded-xl"
              />
              <div className="description">
                <div className="pt-5 text-white text-center font-bold text-xl font-SpaceGrotesk  py-3">
                  <p>Front-End Development</p>
                </div>
                <div className="px-2 flex justify-between font-bold font-SpaceGrotesk">
                  <p className="text-darkPink bg-white px-4 py-1 rounded-lg">
                    ITI
                  </p>
                  <p className="text-blueColor">September 2021</p>
                </div>
              </div>
            </div>

            <div className="border-2 border-blueColor p-2 rounded-2xl flex flex-col justify-center ">
              <img
                src={FWDWEBCHALLENGER}
                alt="FWD WEB CHALLENGER"
                className="rounded-xl"
              />
              <div className="description">
                <div className="pt-5 text-white text-center font-bold text-xl font-SpaceGrotesk  py-3">
                  <p>Web Development Challenger Track</p>
                </div>
                <div className="px-2 flex justify-between font-bold font-SpaceGrotesk">
                  <p className="text-cyancolor bg-white px-4 py-1 rounded-lg">
                    UDACITY
                  </p>
                  <p className="text-blueColor">August 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="skills pb-10">
          <h1 className="text-5xl font-SpaceGrotesk font-extrabold text-center text-yellowcolor my-16">
            SKILLS
          </h1>
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 px-10 cursor-pointer">
            <div className="border-2 border-yellowcolor rounded-full p-3 bg-white hover:">
              <img
                src={html}
                alt="HTML"
                className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
              />
            </div>
            <div className="border-2 border-yellowcolor rounded-full flex justify-center items-center bg-white">
              <img
                src={css}
                alt="CSS"
                className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
              />
            </div>
            <div className="border-2 border-yellowcolor rounded-full p-3 bg-white">
              <img
                src={javascript}
                alt="javascript"
                className="w-32 hover:-translate-y-6 transition duration-300"
              />
            </div>
            <div className="border-2 border-yellowcolor rounded-full p-3 bg-white flex justify-center items-center">
              <img
                src={redux}
                alt="Redux"
                className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
              />
            </div>
            <div className="border-2 border-yellowcolor rounded-full p-3 bg-white flex justify-center items-center">
              <img
                src={react}
                alt="React"
                className="w-32 rounded-xl hover:-translate-y-6 transition duration-300"
              />
            </div>
            <div className="border-2 border-yellowcolor rounded-full p-3 flex justify-center items-center bg-white">
              <img
                src={bootstrab}
                alt="Bootstrab"
                className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
              />
            </div>

            <div className="border-2 border-yellowcolor rounded-full p-3 bg-white flex justify-center items-center  ">
              <img
                src={tailwind}
                alt="Tailwind"
                className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
              />
            </div>
            <div className="border-2 border-yellowcolor rounded-full p-3 bg-white">
              <img
                src={git}
                alt="git"
                className="w-32 rounded-full hover:-translate-y-6 transition duration-300 "
              />
            </div>
            <div className="border-2 border-yellowcolor rounded-full p-3 bg-white flex justify-center items-center">
              <img
                src={responsive}
                alt="responsive"
                className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
              />
            </div>
            <div className="border-2 border-yellowcolor rounded-full p-3 bg-white flex justify-center items-center">
              <img
                src={java}
                alt="java"
                className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
              />
            </div>
            <div className="border-2 border-yellowcolor rounded-full p-3 bg-white flex justify-center items-center">
              <img
                src={c}
                alt="c"
                className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
              />
            </div>
            <div className="border-2 border-yellowcolor rounded-full p-3 bg-white flex justify-center items-center">
              <img
                src={figma}
                alt="Figma"
                className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
