
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion as m } from "framer-motion";

const ContactMe = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        exit={{ opacity: 0 }}
        className="contact sm:h-screen h-full  flex flex-col justify-center pt-40 pb-10"
      >
        <m.header
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="pb-10"
        >
          <h1 className="uppercase text-yellowcolor underline font-bold md:text-5xl text-3xl font-Calistoga text-center">
            let's get in touch
          </h1>
        </m.header>
        <m.form
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="flex flex-col sm:gap-5 gap-8 sm:py-10 py-8 "
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex justify-center items-center flex-col sm:flex-row md:gap-16 sm:gap-8 gap-4 px-10">
            <label
              htmlFor="name"
              className="uppercase font-Calistoga text-2xl font-extrabold text-blueColor "
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder=" Your Name is Here 👀 "
              className="py-2 px-3 sm:w-1/2 w-full outline-none rounded-xl font-SpaceGrotesk font-bold  text-blueColor"
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="flex justify-center items-center flex-col sm:flex-row md:gap-16 sm:gap-8 gap-4  px-10">
            <label
              htmlFor="email"
              className="uppercase font-Calistoga text-2xl font-extrabold text-blueColor "
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder=" Your Emai is Here  👀"
              className="py-2 px-3 sm:w-1/2 w-full outline-none rounded-xl font-SpaceGrotesk font-bold text-blueColor "
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="flex justify-center items-center flex-col sm:flex-row sm:gap-8 gap-4  px-10">
            <label
              htmlFor="subject"
              className="uppercase font-Calistoga text-2xl font-extrabold text-blueColor text-left"
            >
              Subject
            </label>
            <textarea
              id="subject"
              name="subject"
              rows="5"
              cols="50"
              className="sm:w-1/2 w-full px-3 py-2 outline-none rounded-xl font-SpaceGrotesk font-bold  text-blueColor"
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
        </m.form>
      
      </m.div>
    </>
  );
};

export default ContactMe;
