import React from "react";

const ResultItem = ({ title, value }) => {
  return (
    <div className="md:w-56 md:pl-3 md:h-20">
      <span className="block text-center md:text-left mb-1 text-[.6rem] text-dark-gray font-extrabold tracking-[1px]">
        {title}
      </span>
      <span className="block font-bold text-xl md:w-32">{value}</span>
    </div>
  );
};

export default ResultItem;
