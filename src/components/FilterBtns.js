import React from "react";

const FilterBtns = ({ filter, button }) => {
  return (
    <>
      {button.map((category, i) => {
        return (
          <button
          key={i}
            type="button"
            onClick={() => filter(category)}
            className="bg-white px-10 py-2 rounded-xl border-2 border-maincolor text-center hover:bg-maincolor focus:bg-maincolor hover:text-white focus:text-white hover:border-white focus:border-white transition duration-300"
          >
            {category   }
          </button>
        );
      })}
    </>
  );
};

export default FilterBtns;
