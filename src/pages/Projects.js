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

  return (
    <>
      <m.div className="projects h-full pt-40 pb-10 ">
        <m.header
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="pb-10"
        >
          <h1 className="uppercase text-yellowcolor underline font-bold md:text-5xl text-3xl font-Calistoga text-center">
            My projects
          </h1>
        </m.header>

        <m.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="md:flex items-center justify-center grid grid-cols-2 sm:px-10 px-5 md:gap-10 gap-5  font-SpaceGrotesk font-extrabold text-lg text-blueColor mt-10 mb-5"
        >
          <FilterBtns button={button} filter={filter} />
        </m.div>
        <m.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
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
