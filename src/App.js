import bgPattern from "./assets/pattern-bg.png";

const App = () => {
  return (
    <main className="h-screen">
      {/* bg pattern */}
      <div
        className="bg-no-repeat bg-local h-56"
        style={{ backgroundImage: `url(${bgPattern})` }}>
        {/* Title */}
        <h1 className="text-center text-white text-2xl font-medium py-5">
          IP Address Tracker
        </h1>

        {/* search bar */}
        <div className="flex justify-center mb-4 px-7">
          <input
            className="px-3 py-2 rounded-l-lg outline-none w-full max-w-sm"
            type="text"
            value="192.168.1.1"
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
        <div>
          <div>
            <span>IP ADDRESS</span>
            <span>192.168.1.1</span>
          </div>
          <div>
            <span>LOCATION</span>
            <span>Brooklyn, NY 10001</span>
          </div>
          <div>
            <span>TIMEZONE</span>
            <span>UTC-05:00</span>
          </div>
          <div>
            <span>ISP</span>
            <span>SpaceX Starlink</span>
          </div>
        </div>
      </div>

      {/* map */}
    </main>
  );
};

export default App;
