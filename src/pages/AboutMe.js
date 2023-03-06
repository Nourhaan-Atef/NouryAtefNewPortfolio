import { motion as m } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
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
import name from "../assets/girl.png";
import email from "../assets/email.png";
import resident from "../assets/resident.png";
import phone from "../assets/telephone.png";
import address from "../assets/address.png";
import graduation from "../assets/air.PNG";
import { useEffect } from "react";
const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <m.div className="about h-full flex flex-col pt-40 ">
        <m.header
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="pb-10 px-5"
        >
          <h1 className="text-yellowcolor underline font-bold md:text-5xl text-3xl font-Calistoga text-center">
            KNOW MORE ABOUT ME
          </h1>
        </m.header>

        <m.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="md:pt-20 pt-5 pb-16 sm:px-20  px-5 "
        >
          <p className=" px-5 font-bold font-Calistoga md:text-3xl text-2xl text-blueColor ">
            Hello There 👋 👀
          </p>
          <div className="lg:flex justify-center  px-5 gap-12">
            <p className="py-10 font-SpaceGrotesk  md:text-3xl  text-2xl text-white">
              I'm a{" "}
              <span className="text-blueColor font-medium font-Calistoga">
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

        <div className="py-10 grid md:grid-cols-2 gap-20 lg:px-20 sm:px-20">
          <div className="info animation px-5" data-aos="zoom-in">
            <h2
              className="animation tracking-widest font-bold font-Calistoga text-3xl text-yellowcolor  uppercase underline md:text-start text-center"
              data-aos="zoom-in"
            >
              Personal Information
            </h2>
            <div className=" flex lg:flex-col lg:items-start justify-center">
              <div className="py-10 flex flex-col  gap-10 ">
                <div className="flex items-center gap-2">
                  <img src={name} className="w-10 " alt="Name" />
                  <span className="font-Calistoga text-xl text-white ">
                    Nourhan Atef Hossam El-Deen
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <img src={email} className="w-8 " alt="Email" />
                  <span className="font-Calistoga text-xl text-white">
                    anour2168@gmail.com
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <img src={resident} className="w-8 " alt="Resident" />
                  <span className="font-Calistoga text-xl text-white">
                    Egypt
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <img src={address} className="w-8 " alt="Address" />
                  <span className="font-Calistoga text-xl text-white">
                    Menofia,Shibin El-Kom
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <img src={phone} className="w-8 " alt="Phone" />
                  <span className="font-Calistoga text-xl text-white">
                    (+20) 1289780115
                  </span>
                </div>

                <div>
                  <p className="bg-blueColor  font-SpaceGrotesk font-bold text-white text-xl px-10 py-2 hover:bg-white hover:text-blueColor transition duration-500 cursor-pointer w-52 text-center">
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
          </div>
          <div className="educatoin animation px-5" data-aos="zoom-in">
            <h2
              className="animation tracking-widest font-bold font-Calistoga text-3xl text-yellowcolor uppercase  underline md:text-start text-center "
              data-aos="zoom-in"
            >
              Education & Experience
            </h2>
            <div className="flex flex-col">
              <div className="py-10 flex flex-col gap-6 ">
                <div>
                  <p className="font-SpaceGrotesk text-lg text-white md:text-start text-center">
                    <span className="text-blueColor font-bold text-2xl font-SpaceGrotesk block pb-2">
                      📌 Graduated from
                    </span>{" "}
                    <span className="font-bold block">
                      {" "}
                      FACULTY OF COMPUTERS & INFORMATIONS, SHIBIN EL-KOM, EGY
                    </span>
                  </p>

                  <p className="flex justify-between gap-16 py-2 md:text-start text-center">
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
                    <span className="text-blueColor font-bold text-2xl font-SpaceGrotesk block md:text-start text-center">
                      📌 Trainning from
                    </span>{" "}
                    <span className="font-bold block">
                      {" "}
                      INFORMATION TECHNOLOGY INSTITUTE(ITI), MENOFIA, EGY
                    </span>
                    <span className="font-bold text-maincolor">
                      {" "}
                      Front-end Develpment
                    </span>
                  </p>
                  <p className="flex justify-between gap-16 py-2 md:text-start text-center">
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
                    <span className="text-blueColor font-bold text-2xl font-SpaceGrotesk block">
                      📌 Course from
                    </span>{" "}
                    <span className="font-bold block">
                      {" "}
                      Egypt Forward(FWD) & Udacity
                    </span>
                    <span className="font-bold text-maincolor">
                      {" "}
                      React Cross-Skilling
                    </span>
                  </p>
                  <p className="flex justify-between gap-16 py-2 md:text-start text-center">
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
          </div>
        </div>

        <div className="flex flex-col justify-evenly items-center ">
          <div
            className="certificate animation py-10 md:px-5"
            data-aos="zoom-in"
          >
            <h1 className="tracking-widest text-5xl underline font-Calistoga font-extrabold text-center text-yellowcolor mb-16">
              Certificates
            </h1>
            <div
              className="animation grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 px-10 xs:my-3 my-0 md:px-20"
              data-aos="zoom-in"
            >
              <div
                className="animation border-2 border-blueColor p-2 rounded-2xl flex flex-col justify-evenly cursor-pointer hover:border-yellowcolor transition duration-500"
                data-aos="zoom-in"
              >
                <a
                  href="https://drive.google.com/file/d/1Z5TXgeI14PeEAV6CqZJmcikNPzpXz7Y1/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={FWDREACT}
                    alt="FWD REACT"
                    className="object-cover h-80 w-full rounded-xl scale-90 hover:scale-100 transition duration-500"
                  />
                </a>
                <div className="description">
                  <div className="pt-5 text-white text-center font-bold text-xl font-SpaceGrotesk">
                    <p>React Development Cross-Skilling</p>
                  </div>
                  <div className="px-2 flex justify-between items-center font-bold font-SpaceGrotesk py-3">
                    <p className="text-cyancolor bg-white px-4 py-1 rounded-lg">
                      UDACITY
                    </p>
                    <p className="text-blueColor">December 2022</p>
                  </div>
                </div>
              </div>

              <div
                className="animation border-2 border-blueColor p-2 rounded-2xl flex flex-col justify-evenly cursor-pointer hover:border-yellowcolor transition duration-500"
                data-aos="zoom-in"
              >
                <a
                  href="https://drive.google.com/file/d/1n6R5f715PKCOItkftkthn1-JuoWwgbK7/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={ITI}
                    alt="ITI Frontend development"
                    className="object-cover h-80 w-full rounded-xl scale-90 hover:scale-100 transition duration-500"
                  />
                </a>
                <div className="description">
                  <div className="pt-5 text-white text-center font-bold text-xl font-SpaceGrotesk  py-3">
                    <p>Front-End Development</p>
                  </div>
                  <div className="px-2 flex justify-between items-center font-bold font-SpaceGrotesk">
                    <p className="text-darkPink bg-white px-4 py-1 rounded-lg">
                      ITI
                    </p>
                    <p className="text-blueColor">September 2021</p>
                  </div>
                </div>
              </div>

              <div
                className="animation border-2 border-blueColor p-2 rounded-2xl flex flex-col justify-evenly cursor-pointer hover:border-yellowcolor transition duration-500"
                data-aos="zoom-in"
              >
                <a
                  href="https://drive.google.com/file/d/1ilngjwv7_Ym-_KAaE5NNkyKhaI3py7l7/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={FWDWEBCHALLENGER}
                    alt="FWD WEB CHALLENGER"
                    className="object-cover h-80 w-full rounded-xl scale-90 hover:scale-100 transition duration-500"
                  />
                </a>
                <div className="description">
                  <div className="pt-5 text-white text-center font-bold text-xl font-SpaceGrotesk  py-3">
                    <p>Web Development Challenger Track</p>
                  </div>
                  <div className="px-2 flex justify-between items-center font-bold font-SpaceGrotesk">
                    <p className="text-cyancolor bg-white px-4 py-1 rounded-lg">
                      UDACITY
                    </p>
                    <p className="text-blueColor">August 2022</p>
                  </div>
                </div>
              </div>
              <div
                className="animation border-2 border-blueColor p-2 rounded-2xl flex flex-col justify-evenly cursor-pointer hover:border-yellowcolor transition duration-500"
                data-aos="zoom-in"
              >
                <a
                  href="https://docs.google.com/document/d/15IUhIuqS0qA5EdHoSgHAnaJ9cZYHpX3X/edit?usp=share_link&ouid=107819491264642398110&rtpof=true&sd=true"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={graduation}
                    alt="IOT"
                    className="object-cover h-80 w-full rounded-xl scale-90 hover:scale-100 transition duration-500"
                  />
                </a>
                <div className="description">
                  <div className="pt-5 text-white text-center font-bold text-xl font-SpaceGrotesk  py-3">
                    <p>Automatic Air-Conditioning (IOT)</p>
                  </div>
                  <div className="px-2 flex justify-between items-center font-bold font-SpaceGrotesk">
                    <p className="text-darkPink bg-white px-4 py-1 rounded-lg">
                      University
                    </p>
                    <p className="text-blueColor">Aug 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <m.div className="skills animation py-10 pb-20" data-aos="zoom-in">
            <h1 className="tracking-widest text-5xl underline font-Calistoga font-extrabold text-center text-yellowcolor mb-16">
              SKILLS
            </h1>
            <div
              className="animatoin grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-7 px-10 cursor-pointer"
              data-aos="zoom-in"
            >
              <div
                className="animation border-2 border-yellowcolor rounded-full p-3 bg-white hover: hover:border-cyancolor transition duration-300"
                data-aos="zoom-in"
              >
                <img
                  src={html}
                  alt="HTML"
                  className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
                />
              </div>
              <div
                className="animation border-2 border-yellowcolor rounded-full flex justify-center items-center bg-white hover:border-cyancolor transition duration-300"
                data-aos="zoom-in"
              >
                <img
                  src={css}
                  alt="CSS"
                  className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
                />
              </div>
              <div
                className="animation border-2 border-yellowcolor rounded-full p-3 bg-white hover:border-cyancolor transition duration-300"
                data-aos="zoom-in"
              >
                <img
                  src={javascript}
                  alt="javascript"
                  className="w-32 hover:-translate-y-6 transition duration-300"
                />
              </div>
              <div
                className="animation border-2 border-yellowcolor rounded-full p-3 bg-white flex justify-center items-center hover:border-cyancolor transition duration-300"
                data-aos="zoom-in"
              >
                <img
                  src={redux}
                  alt="Redux"
                  className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
                />
              </div>
              <div
                className="animation border-2 border-yellowcolor rounded-full p-3 bg-white flex justify-center items-center hover:border-cyancolor transition duration-300"
                data-aos="zoom-in"
              >
                <img
                  src={react}
                  alt="React"
                  className="w-32 rounded-xl hover:-translate-y-6 transition duration-300"
                />
              </div>
              <div
                className="animation border-2 border-yellowcolor rounded-full p-3 flex justify-center items-center bg-white hover:border-cyancolor transition duration-300"
                data-aos="zoom-in"
              >
                <img
                  src={bootstrab}
                  alt="Bootstrab"
                  className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
                />
              </div>
              <div
                className="animation border-2 border-yellowcolor rounded-full p-3 bg-white flex justify-center items-center  hover:border-cyancolor transition duration-300 "
                data-aos="zoom-in"
              >
                <img
                  src={tailwind}
                  alt="Tailwind"
                  className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
                />
              </div>
              <div
                className="animation border-2 border-yellowcolor rounded-full p-3 bg-white hover:border-cyancolor transition duration-300"
                data-aos="zoom-in"
              >
                <img
                  src={git}
                  alt="git"
                  className="w-32 rounded-full hover:-translate-y-6 transition duration-300 "
                />
              </div>
              <div
                className="animation border-2 border-yellowcolor rounded-full p-3 bg-white flex justify-center items-center hover:border-cyancolor transition duration-300"
                data-aos="zoom-in"
              >
                <img
                  src={responsive}
                  alt="responsive"
                  className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
                />
              </div>
              <div
                className="animation border-2 border-yellowcolor rounded-full p-3 bg-white flex justify-center items-center hover:border-cyancolor transition duration-300"
                data-aos="zoom-in"
              >
                <img
                  src={java}
                  alt="java"
                  className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
                />
              </div>
              <div
                className="animation border-2 border-yellowcolor rounded-full p-3 bg-white flex justify-center items-center hover:border-cyancolor transition duration-300"
                data-aos="zoom-in"
              >
                <img
                  src={c}
                  alt="c"
                  className="w-32 rounded-full hover:-translate-y-6 transition duration-300"
                />
              </div>
              <div
                className="animation border-2 border-yellowcolor rounded-full p-3 bg-white flex justify-center items-center hover:border-cyancolor transition duration-300"
                data-aos="zoom-in"
              >
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
