import React from "react";

const ResultItem = ({ title, value }) => {
  return (
    <div className="overflow-auto md:w-56 md:pl-5 md:h-20">
      <span className="block text-center md:text-left mb-1 text-[.6rem] text-dark-gray font-extrabold tracking-[1px]">
        {title}
      </span>
      <span className="block font-bold text-xs text-center md:w-32 md:text-lg md:text-left">
        {value}
      </span>
    </div>
  );
};

export default ResultItem;
