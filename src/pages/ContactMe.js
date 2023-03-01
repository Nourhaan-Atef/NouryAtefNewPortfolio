import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import behance from "../assets/behance.png";
import github from "../assets/github.png";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const ContactMe = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const notify = () =>
  //   toast("Sent Message Successfully ✅🎉", {
  //     position: "top-right",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eiak4e7",
        "template_4agevmx",
        form.current,
        "E16WlGVvX9zM5kxLe"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Sent Message Successfully ✅🎉", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
      
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="contact h-screen  flex flex-col justify-center pt-40 pb-10">
        <header className="pb-10">
          <h1 className="uppercase text-yellowcolor underline font-bold md:text-5xl text-3xl font-Calistoga text-center">
            let's get in touch
          </h1>
        </header>
        <form
          className="flex flex-col gap-5 pb-10 py-10"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex justify-center items-start md:gap-16 gap-8">
            <label
              htmlFor="name"
              className="uppercase font-Calistoga text-2xl font-extrabold text-maincolor "
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder=" Your Name is Here 👀 "
              className="py-2 px-3 w-1/2 outline-none rounded-xl font-SpaceGrotesk font-bold  text-blueColor"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center items-start md:gap-16 gap-8">
            <label
              htmlFor="email"
              className="uppercase font-Calistoga text-2xl font-extrabold text-maincolor "
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder=" Your Emai is Here  👀"
              className="py-2 px-3 w-1/2 outline-none rounded-xl font-SpaceGrotesk font-bold text-blueColor "
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="flex justify-center items-start gap-8">
            <label
              htmlFor="subject"
              className="uppercase font-Calistoga text-2xl font-extrabold text-maincolor "
            >
              Subject
            </label>
            <textarea
              id="subject"
              name="subject"
              rows="5"
              cols="50"
              className="w-1/2 px-3 py-2 outline-none rounded-xl font-SpaceGrotesk font-bold  text-blueColor"
              placeholder="Tell Me What You Want Here 👇"
              required
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blueColor  font-SpaceGrotesk font-bold text-white text-xl px-8 py-2 hover:bg-white hover:text-blueColor transition duration-500 cursor-pointer uppercase rounded-lg"
        
            >
              Send ➡
            </button>
          </div>
        </form>
        <div className="icons">
          <div className="contacts flex justify-center  gap-10  px-2 pt-5">
            <Link to="https://www.facebook.com/nony.atef.77" target="_blank">
              <div className="w-14 bg-white rounded-full p-4 hover:bg-yellowcolor transition duration-300 hover:-translate-y-3 ">
                <img src={facebook} alt="facebook" />
              </div>
            </Link>

            <Link
              to="https://www.linkedin.com/in/nourhan-atef-54630b1b1/"
              target="_blank"
            >
              <div className="w-14 bg-white rounded-full p-4 hover:bg-yellowcolor transition duration-300 hover:-translate-y-3">
                <img src={linkedin} alt="linkedin" />
              </div>
            </Link>

            <Link to="https://www.behance.net/nourhan20/" target="_blank">
              <div className="w-14 bg-white rounded-full p-4 hover:bg-yellowcolor transition duration-300 hover:-translate-y-3">
                <img src={behance} alt="behance" />
              </div>
            </Link>

            <Link to="https://github.com/Nourhaan-Atef" target="_blank">
              <div className="w-14 bg-white rounded-full p-3 hover:bg-yellowcolor transition duration-300 hover:-translate-y-3">
                <img src={github} alt="github" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
