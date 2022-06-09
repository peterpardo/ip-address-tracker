import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import bgPattern from "./assets/pattern-bg.png";
import Map from "./Map";
import ResultItem from "./components/ResultItem";

const App = () => {
  // 1000 request only
  const API_KEY = "at_t57za9BtzJ6507LeCkA99NT7GqWFD";
  const API_URL = "https://geo.ipify.org/api/v2/country,city?";

  const [ipInfo, setIpInfo] = useState({
    ip: "none",
    isp: "none",
    location: {
      country: "none",
      region: "none",
      timezone: "none",
      lat: 0,
      lng: 0,
    },
  });
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    try {
      const count = search.match(/[.]/g).length;
      let url;
      if (count === 3) {
        url = `${API_URL}apiKey=${API_KEY}&ipAddress=${search}`;
      } else {
        url = `${API_URL}apiKey=${API_KEY}&domain=${search}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      if (data?.code) {
        setIpInfo({
          ip: "none",
          isp: "none",
          location: {
            country: "none",
            region: "none",
            timezone: "none",
            lat: 0,
            lng: 0,
          },
        });
        alert(data?.messages);
      } else {
        setIpInfo(data);
      }
    } catch (err) {
      alert(`Enter a valid domain name`);
    }
  };

  useEffect(() => {
    const fetchIpInfo = async () => {
      const response = await fetch(`${API_URL}apiKey=${API_KEY}`);
      const data = await response.json();
      setIpInfo(data);
    };

    fetchIpInfo();
  }, []);

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
        <div className="flex justify-center max-w-[280px] sm:max-w-md md:max-w-xl w-full mx-auto">
          <input
            className="px-4 py-3 rounded-l-lg outline-none w-full text-sm md:px:5 md:py-4 md:text-md"
            type="text"
            placeholder="Search for any IP adresses or domain"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-dark-gray-dark py-2 px-5 rounded-r-lg hover:bg-dark-gray"
            type="button"
            onClick={() => handleSearch()}>
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
        <div
          className="flex items-center flex-col gap-y-2 w-full max-w-[280px] drop-shadow-lg bg-white m-auto absolute inset-x-0 -bottom-0 translate-y-[40%] z-10 rounded-xl py-4 
          sm:max-w-md md:divide-x-2 md:py-5 md:flex-row md:max-w-fit md:translate-y-1/2">
          <ResultItem title="IP ADDRESS" value={ipInfo?.ip} />
          <ResultItem
            title="LOCATION"
            value={`${ipInfo.location.country}, ${ipInfo?.location?.region}`}
          />
          <ResultItem title="TIMEZONE" value={ipInfo?.location?.timezone} />
          <ResultItem title="ISP" value={ipInfo?.isp} />
        </div>
      </div>

      {/* map */}
      <div className="w-full h-[300px] flex-1">
        <Map lat={ipInfo?.location?.lat} lng={ipInfo?.location?.lng} />
      </div>
    </main>
  );
};

export default App;
