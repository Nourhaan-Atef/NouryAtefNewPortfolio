import { Link } from "react-router-dom";
import github from "../assets/github.png";
import send from "../assets/send.png";
import { AnimatePresence, motion as m } from "framer-motion";

const Menu = ({ data }) => {
  return (
    <>
      {data.map((project) => {
        return (
          <AnimatePresence  key={project.id}>
            <m.div
              layout
             
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col bg-maincolor justify-between  p-5 rounded-3xl border-2 border-transparent hover:border-yellowcolor transition duration-500"
            >
              <div>
                <img
                  src={project.img}
                  alt="Project Img"
                  className="rounded-3xl object-cover h-80 w-full opacity-75 hover:opacity-100 scale-95 hover:scale-105  transition duration-500 "
                />
              </div>
              <div className="flex justify-center py-2">
                <p className="font-SpaceGrotesk text-xl font-bold text-yellowcolor text-center">
                  {project.name}
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex justify-center  gap-2 ">
                  {project.tools.map((tool, index) => {
                    return (
                      <div className="text-center" key={index}>
                        <img
                          src={tool}
                          alt="icon"
                          className="w-14  rounded-full bg-white p-2 gap-3"
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between ">
                  <Link to={project.git} target="_blank">
                    <div className="w-12 bg-white rounded-full p-3 hover:bg-yellowcolor transition duration-300 hover:-translate-y-2 cursor-pointer">
                      <img src={github} alt="github" />
                    </div>
                  </Link>

                  <div className="flex justify-center items-center w-full top-3 ">
                    <p className=" text-center bg-pink text-white px-10 py-2 rounded-3xl text-md font-Calistoga">
                      {project.category}
                    </p>
                  </div>
                  <Link to={project.live} target="_blank">
                    <div className="w-12 bg-white rounded-full p-3 hover:bg-yellowcolor transition duration-300 hover:-translate-y-2 cursor-pointer">
                      <img src={send} alt="github" />
                    </div>
                  </Link>
                </div>
              </div>
            </m.div>
          </AnimatePresence>
        );
      })}
    </>
  );
};

export default Menu;
