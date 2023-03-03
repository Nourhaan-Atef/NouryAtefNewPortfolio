import { data } from "./data";
import { useState } from "react";
import Menu from "../components/Menu";
import FilterBtns from "../components/FilterBtns";
import { motion as m } from "framer-motion";

const Projects = () => {
  const allCategories = ["All", ...new Set(data.map((item) => item.category))];
  const [menuItem, setMenuItem] = useState(data);
  const [button, setButton] = useState(allCategories);

  const filter = (button) => {
    if (button === "All") {
      setMenuItem(data);
      return;
    }
    const filterData = data.filter((item) => item.category === button);
    setMenuItem(filterData);
  };

  // const Projects = data.map((project) => {
  //   return (
  //     <div
  //       className="flex flex-col bg-maincolor justify-between  p-5 rounded-xl border-2 border-transparent hover:border-yellowcolor transition duration-500"
  //       key={project.id}
  //     >
  //       <div>
  //         <img
  //           src={project.img}
  //           alt="Project Img"
  //           className="rounded-3xl object-cover h-96 w-full scale-95 hover:scale-100 hover:-translate-y-3 transition duration-500 cursor-pointer"
  //         />
  //       </div>
  //       <div className="flex justify-center py-2">
  //         <p className="font-SpaceGrotesk text-xl font-bold text-yellowcolor text-center">
  //           {project.name}
  //         </p>
  //       </div>
  //       <div className="flex flex-col gap-5">
  //         <div className="flex justify-center cursor-pointer gap-2 ">
  //           {project.tools.map((tool, index) => {
  //             return (
  //               <div className="text-center" key={index}>
  //                 <img
  //                   src={tool}
  //                   alt="icon"
  //                   className="w-14  rounded-full bg-white p-2 gap-3"
  //                 />
  //               </div>
  //             );
  //           })}
  //         </div>
  //         <div className="flex justify-between ">
  //           <Link to={project.git} target="_blank">
  //             <div className="w-12 bg-white rounded-full p-3 hover:bg-yellowcolor transition duration-300 hover:-translate-y-2">
  //               <img src={github} alt="github" />
  //             </div>
  //           </Link>

  //           <div className="flex justify-center items-center w-full top-3 cursor-pointer">
  //             <p className=" text-center bg-pink text-white px-10 py-2 rounded-3xl text-md font-Calistoga">
  //               {project.category}
  //             </p>
  //           </div>
  //           <Link to={project.live} target="_blank">
  //             <div className="w-12 bg-white rounded-full p-3 hover:bg-yellowcolor transition duration-300 hover:-translate-y-2">
  //               <img src={send} alt="github" />
  //             </div>
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // });
  return (
    <>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        exit={{ opacity: 0 }}
        className="projects h-full pt-40 pb-10 "
      >
        <m.header
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="pb-10"
        >
          <h1 className="uppercase text-yellowcolor underline font-bold md:text-5xl text-3xl font-Calistoga text-center">
            My projects
          </h1>
        </m.header>

        <m.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="md:flex items-center justify-center grid grid-cols-2 sm:px-10 px-5 md:gap-10 gap-5  font-SpaceGrotesk font-extrabold text-lg text-blueColor mt-10 mb-5"
        >
          <FilterBtns button={button} filter={filter} />
        </m.div>
        <m.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="pt-10 grid  lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-5 lg:px-24 px-5"
        >
          <Menu data={menuItem} />
        </m.div>
      </m.div>
    </>
  );
};

export default Projects;
