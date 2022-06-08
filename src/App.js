import React from "react";
import "leaflet/dist/leaflet.css";
import bgPattern from "./assets/pattern-bg.png";
import Map from "./Map";
import ResultItem from "./components/ResultItem";

const App = () => {
  return (
    <main className="h-screen flex flex-col">
      {/* bg pattern */}
      <div
        className="bg-no-repeat bg-cover h-64 bg-local relative"
        style={{ backgroundImage: `url(${bgPattern})` }}>
        {/* Title */}
        <h1 className="text-center text-white text-2xl md:text-4xl md:mb-4 font-medium py-5">
          IP Address Tracker
        </h1>

        {/* search bar */}
        <div className="flex justify-center max-w-xs sm:max-w-md md:max-w-xl w-full mx-auto">
          <input
            className="px-5 py-4 rounded-l-lg outline-none w-full"
            type="text"
            placeholder="Search for any IP adresses or domain"
          />
          <button
            className="bg-dark-gray-dark py-2 px-5 rounded-r-lg hover:bg-dark-gray"
            type="button">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
              <path
                fill="none"
                stroke="#FFF"
                strokeWidth="3"
                d="M2 1l6 6-6 6"
              />
            </svg>
          </button>
        </div>

        {/* result */}
        <div className="drop-shadow-md bg-white md:divide-x-2 m-auto absolute inset-x-0 -bottom-0 translate-y-[60%] z-10 rounded-xl p-4 md:py-5 flex items-center flex-col md:flex-row gap-y-4 w-full max-w-xs sm:max-w-md md:max-w-fit">
          <ResultItem title="IP ADDRESS" value="192.212.174.101" />
          <ResultItem title="LOCATION" value="Brooklyn, NY 10001" />
          <ResultItem title="TIMEZONE" value="UTC-05:00" />
          <ResultItem title="ISP" value="SpaceX Starlink" />
        </div>
      </div>

      {/* map */}
      <div className="w-full h-[300px] flex-1">
        <Map />
      </div>
    </main>
  );
};

export default App;
