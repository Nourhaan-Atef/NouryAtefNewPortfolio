import hello from "../assets/hello.jpg";
const AboutMe = () => {
  return (
    <>
      <div className="about h-full  flex flex-col justify-center pt-32">
        <header>
          <h1 className="text-yellowcolor font-bold md:text-5xl text-3xl font-Calistoga text-center">
            KNOW MORE ABOUT ME
          </h1>
        </header>
        <div className="py-10">
          <p className="md:px-10 px-5 font-bold font-Calistoga text-3xl text-maincolor ">
            Hello There 👋 👀
          </p>
          <div className="lg:flex justify-between md:px-10 px-5 gap-12">
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
        </div>
        <div className="py-10 md:grid md:grid-cols-2 grid">
          <div className="info md:px-10 px-5 ">
            <h2 className="font-bold font-Calistoga text-3xl text-yellowcolor md:text-start text-center">
              Personal Information
            </h2>
            <div className="py-10 flex flex-col gap-10">
              <div className="flex">
                <p className="font-Calistoga text-xl text-white">
                  <span className="text-blueColor font-bold text-xl font-SpaceGrotesk">
                    NAME :{" "}
                  </span>{" "}
                  Nourhan Atef Hossam El-Deen
                </p>
              </div>
              <div className="flex ">
                <p className="font-Calistoga text-xl text-white">
                  <span className="text-blueColor font-bold text-xl font-SpaceGrotesk">
                    EMAIL :{" "}
                  </span>{" "}
                  anour2168@gmail.com
                </p>
              </div>
              <div className="flex">
                <p className="font-Calistoga text-xl text-white">
                  <span className="text-blueColor font-bold text-xl font-SpaceGrotesk">
                    Residence :{" "}
                  </span>{" "}
                  Egypt
                </p>
              </div>
              <div className="flex ">
                <p className="font-Calistoga text-xl text-white">
                  <span className="text-blueColor font-bold text-xl font-SpaceGrotesk">
                    ADDRESS :{" "}
                  </span>{" "}
                  Menofia,Shibin El-Kom
                </p>
              </div>
              <div className="flex">
                <p className="font-Calistoga text-xl text-white">
                  <span className="text-blueColor font-bold text-xl font-SpaceGrotesk">
                    PHONE :{" "}
                  </span>{" "}
                  (+20) 1289780115
                </p>
              </div>
              <div className="flex">
                <p className="bg-blueColor  font-SpaceGrotesk font-bold text-white text-xl px-8 py-2 hover:bg-white hover:text-blueColor transition duration-500 cursor-pointer">
                  Download CV
                </p>
              </div>
            </div>
          </div>
          <div className="educatoin md:px-10 px-5 ">
            <h2 className="font-bold font-Calistoga text-3xl text-yellowcolor uppercase md:text-start text-center ">
              Education & Experience
            </h2>
            <div className="py-10 flex flex-col gap-6">
              <div>
                <p className="font-SpaceGrotesk text-lg text-white ">
                  <span className="text-blueColor font-bold text-xl font-SpaceGrotesk block pb-2">
                    📌 Graduated from
                  </span>{" "}
                  <span className="font-bold block">
                    {" "}
                    FACULTY OF COMPUTERS & INFORMATIONS, SHIBIN EL-KOM, EGY
                  </span>
                </p>
                <p className="flex gap-16 py-2">
                  <span className="bg-white rounded px-6 py-1 font-SpaceGrotesk font-bold text-darkPink">
                    2018
                  </span>

                  <span className="bg-white rounded px-6 py-1 font-SpaceGrotesk font-bold text-darkPink">
                    2022
                  </span>
                </p>
              </div>
              <div>
                <p className="font-SpaceGrotesk text-lg text-white">
                  <span className="text-blueColor font-bold text-xl font-SpaceGrotesk block">
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
                <p className="flex gap-16 py-2">
                  <span className="bg-white rounded px-6 py-1 font-SpaceGrotesk font-bold text-darkPink">
                    July 2021
                  </span>
                  <span className="bg-white rounded px-6 py-1 font-SpaceGrotesk font-bold text-darkPink">
                    Sep 2021
                  </span>
                </p>
              </div>
              <div>
                <p className="font-SpaceGrotesk text-lg text-white">
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
                <p className="flex gap-16 py-2">
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
    </>
  );
};

export default AboutMe;
