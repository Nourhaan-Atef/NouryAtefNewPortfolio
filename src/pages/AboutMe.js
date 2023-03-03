import hello from "../assets/hello.jpg";
import cv from "../assets/MY CV.pdf";
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
import { motion as m } from "framer-motion";

const AboutMe = () => {
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        exit={{ opacity: 0 }}
        className="about h-full  flex flex-col justify-evenly pt-40 "
      >
        <m.header
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="pb-10"
        >
          <h1 className="text-yellowcolor underline font-bold md:text-5xl text-3xl font-Calistoga text-center">
            KNOW MORE ABOUT ME
          </h1>
        </m.header>

        <m.div
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="md:pt-20 pt-5 pb-10 md:px-10 xl:px-32 "
        >
          <p className="px-5 font-bold font-Calistoga text-3xl text-maincolor ">
            Hello There 👋 👀
          </p>
          <div className="lg:flex justify-center px-5 gap-12">
            <p className="py-10 font-SpaceGrotesk  text-3xl text-white">
              I'm a{" "}
              <span className="text-maincolor font-bold font-Calistoga">
                Front-End Developer
              </span>{" "}
              with a passion for web design. I enjoy developing simple, clean
              and slick websites that provide real value to the end user.
              Thousands of clients have procured exceptional results while
              working with me. Delivering work within time and budget which
              meets client’s requirements is our moto
            </p>
            <img
              src={hello}
              alt="hello"
              className="w-96 rounded-full lg:block hidden"
            />
          </div>
        </m.div>

        <div className="py-10 flex lg:flex-row md:justify-evenly flex-col gap-20">
          <m.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className="info px-5"
          >
            <h2 className="tracking-widest font-bold font-Calistoga text-3xl text-yellowcolor text-center uppercase underline">
              Personal Information
            </h2>
            <div className=" flex lg:flex-col lg:items-start justify-center">
              <div className="py-10 flex flex-col  gap-10">
                <div>
                  <p className="font-Calistoga text-xl text-white ">
                    <span className="text-blueColor font-bold text-xl font-SpaceGrotesk ">
                      NAME :{" "}
                    </span>{" "}
                    Nourhan Atef Hossam El-Deen
                  </p>
                </div>

                <div>
                  <p className="font-Calistoga text-xl text-white">
                    <span className="text-blueColor font-bold text-xl font-SpaceGrotesk">
                      EMAIL :{" "}
                    </span>{" "}
                    anour2168@gmail.com
                  </p>
                </div>

                <div>
                  <p className="font-Calistoga text-xl text-white">
                    <span className="text-blueColor font-bold text-xl font-SpaceGrotesk">
                      Residence :{" "}
                    </span>{" "}
                    Egypt
                  </p>
                </div>

                <div>
                  <p className="font-Calistoga text-xl text-white">
                    <span className="text-blueColor font-bold text-xl font-SpaceGrotesk">
                      ADDRESS :{" "}
                    </span>{" "}
                    Menofia,Shibin El-Kom
                  </p>
                </div>

                <div>
                  <p className="font-Calistoga text-xl text-white">
                    <span className="text-blueColor font-bold text-xl font-SpaceGrotesk">
                      PHONE :{" "}
                    </span>{" "}
                    (+20) 1289780115
                  </p>
                </div>

                <div>
                  <p className="bg-blueColor  font-SpaceGrotesk font-bold text-white text-xl px-8 py-2 hover:bg-white hover:text-blueColor transition duration-500 cursor-pointer w-52 text-center">
                    <a href={cv} target="_blank" rel="noreferrer">
                      Download CV
                    </a>
                  </p>
                  <span className="relative flex h-4 w-4 -top-12 -left-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellowcolor opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-yellowcolor"></span>
                  </span>
                </div>
              </div>
            </div>
          </m.div>
          <m.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className="educatoin px-5"
          >
            <h2 className="tracking-widest font-bold font-Calistoga text-3xl text-yellowcolor uppercase  underline lg:text-start text-center ">
              Education & Experience
            </h2>
            <div className="flex flex-col items-center">
              <div className="py-10 flex flex-col gap-6 ">
                <div>
                  <p className="font-SpaceGrotesk text-lg text-white md:text-start text-center">
                    <span className="text-blueColor font-bold text-xl font-SpaceGrotesk block pb-2">
                      📌 Graduated from
                    </span>{" "}
                    <span className="font-bold block">
                      {" "}
                      FACULTY OF COMPUTERS & INFORMATIONS, SHIBIN EL-KOM, EGY
                    </span>
                  </p>
                  <p className="flex justify-center gap-16 py-2 md:text-start text-center">
                    <span className="bg-white rounded px-6 py-1 font-SpaceGrotesk font-bold text-darkPink">
                      Sep 2018
                    </span>

                    <span className="bg-white rounded px-6 py-1 font-SpaceGrotesk font-bold text-darkPink">
                      Aug 2022
                    </span>
                  </p>
                </div>

                <div>
                  <p className="font-SpaceGrotesk text-lg text-white md:text-start text-center">
                    <span className="text-blueColor font-bold text-xl font-SpaceGrotesk block md:text-start text-center">
                      📌 Trainning from
                    </span>{" "}
                    <span className="font-bold block">
                      {" "}
                      INFORMATION TECHNOLOGY INSTITUTE(ITI), MENOFIA, EGY
                    </span>
                    <span className="font-bold text-cyancolor">
                      {" "}
                      Front-end Develpment
                    </span>
                  </p>
                  <p className="flex justify-center gap-16 py-2 md:text-start text-center">
                    <span className="bg-white rounded px-6 py-1 font-SpaceGrotesk font-bold text-darkPink">
                      July 2021
                    </span>
                    <span className="bg-white rounded px-6 py-1 font-SpaceGrotesk font-bold text-darkPink">
                      Sep 2021
                    </span>
                  </p>
                </div>

                <div className=" md:text-start text-center">
                  <p className="font-SpaceGrotesk text-lg text-white md:text-start text-center">
                    <span className="text-blueColor font-bold text-xl font-SpaceGrotesk block">
                      📌 Course from
                    </span>{" "}
                    <span className="font-bold block">
                      {" "}
                      Egypt Forward(FWD) & Udacity
                    </span>
                    <span className="font-bold text-cyancolor">
                      {" "}
                      React Cross-Skilling
                    </span>
                  </p>
                  <p className="flex justify-center gap-16 py-2 md:text-start text-center">
                    <span className="bg-white rounded px-6 py-1 font-SpaceGrotesk font-bold text-darkPink">
                      Dec 2022
                    </span>
                    <span className="bg-white rounded px-6 py-1 font-SpaceGrotesk font-bold text-darkPink">
                      Jan 2022
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </m.div>
        </div>

        <div className="flex flex-col justify-evenly items-center ">
          <m.div
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className="certificate py-10"
          >
            <m.h1 className="tracking-widest text-5xl underline font-Calistoga font-extrabold text-center text-yellowcolor mb-16">
              Certificates
            </m.h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-10 xs:my-3 my-0 md:px-32">
              <div className="border-2 border-blueColor p-2 rounded-2xl flex flex-col justify-center cursor-pointer hover:border-yellowcolor transition duration-300">
                <a
                  href="https://drive.google.com/file/d/1Z5TXgeI14PeEAV6CqZJmcikNPzpXz7Y1/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={FWDREACT}
                    alt="FWD REACT"
                    className="rounded-xl scale-90 hover:scale-100 transition duration-500"
                  />
                </a>

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

              <div className="border-2 border-blueColor p-2 rounded-2xl flex flex-col justify-center cursor-pointer hover:border-yellowcolor transition duration-300">
                <a
                  href="https://drive.google.com/file/d/1n6R5f715PKCOItkftkthn1-JuoWwgbK7/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={ITI}
                    alt="ITI Frontend development"
                    className="rounded-xl scale-90 hover:scale-100 transition duration-500"
                  />
                </a>
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

              <div className="border-2 border-blueColor p-2 rounded-2xl flex flex-col justify-center cursor-pointer hover:border-yellowcolor transition duration-300">
                <a
                  href="https://drive.google.com/file/d/1ilngjwv7_Ym-_KAaE5NNkyKhaI3py7l7/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={FWDWEBCHALLENGER}
                    alt="FWD WEB CHALLENGER"
                    className="rounded-xl scale-90 hover:scale-100 transition duration-500"
                  />
                </a>
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
          </m.div>
          <m.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className="skills py-10 pb-20"
          >
            <h1 className="tracking-widest text-5xl underline font-Calistoga font-extrabold text-center text-yellowcolor my-16">
              SKILLS
            </h1>
            <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 px-10 cursor-pointer">
              <div className="border-2 border-yellowcolor rounded-full p-3 bg-white hover: hover:border-cyancolor transition duration-300">
                <img
                  src={html}
                  alt="HTML"
                  className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
                />
              </div>
              <div className="border-2 border-yellowcolor rounded-full flex justify-center items-center bg-white hover:border-cyancolor transition duration-300">
                <img
                  src={css}
                  alt="CSS"
                  className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
                />
              </div>
              <div className="border-2 border-yellowcolor rounded-full p-3 bg-white hover:border-cyancolor transition duration-300">
                <img
                  src={javascript}
                  alt="javascript"
                  className="w-32 hover:-translate-y-6 transition duration-300"
                />
              </div>
              <div className="border-2 border-yellowcolor rounded-full p-3 bg-white flex justify-center items-center hover:border-cyancolor transition duration-300">
                <img
                  src={redux}
                  alt="Redux"
                  className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
                />
              </div>
              <div className="border-2 border-yellowcolor rounded-full p-3 bg-white flex justify-center items-center hover:border-cyancolor transition duration-300">
                <img
                  src={react}
                  alt="React"
                  className="w-32 rounded-xl hover:-translate-y-6 transition duration-300"
                />
              </div>
              <div className="border-2 border-yellowcolor rounded-full p-3 flex justify-center items-center bg-white hover:border-cyancolor transition duration-300">
                <img
                  src={bootstrab}
                  alt="Bootstrab"
                  className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
                />
              </div>

              <div className="border-2 border-yellowcolor rounded-full p-3 bg-white flex justify-center items-center  hover:border-cyancolor transition duration-300 ">
                <img
                  src={tailwind}
                  alt="Tailwind"
                  className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
                />
              </div>
              <div className="border-2 border-yellowcolor rounded-full p-3 bg-white hover:border-cyancolor transition duration-300">
                <img
                  src={git}
                  alt="git"
                  className="w-32 rounded-full hover:-translate-y-6 transition duration-300 "
                />
              </div>
              <div className="border-2 border-yellowcolor rounded-full p-3 bg-white flex justify-center items-center hover:border-cyancolor transition duration-300">
                <img
                  src={responsive}
                  alt="responsive"
                  className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
                />
              </div>
              <div className="border-2 border-yellowcolor rounded-full p-3 bg-white flex justify-center items-center hover:border-cyancolor transition duration-300">
                <img
                  src={java}
                  alt="java"
                  className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
                />
              </div>
              <div className="border-2 border-yellowcolor rounded-full p-3 bg-white flex justify-center items-center hover:border-cyancolor transition duration-300">
                <img
                  src={c}
                  alt="c"
                  className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
                />
              </div>
              <div className="border-2 border-yellowcolor rounded-full p-3 bg-white flex justify-center items-center hover:border-cyancolor transition duration-300">
                <img
                  src={figma}
                  alt="Figma"
                  className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
                />
              </div>
            </div>
          </m.div>
        </div>
      </m.div>
    </>
  );
};

export default AboutMe;
