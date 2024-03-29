import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/navigation/App";

function App() {
  return (
    <div className="text-black bg-white dark:bg-gray-900 dark:text-white w-full box-border p-0 m-0 ">
      <div className="container mx-auto p-4">
        <header className="h-screen">
          <Navigation />

          <div className="banner flex py-40 mx-auto lg:mx-40 text-left">
            <div className="left flex flex-wrap flex-col content-start items-start w-full">
              <h2 className="text-5xl font-black">
                Hi, I'm <span className="text-red-500">Kia</span>...
              </h2>
              <div className="lg:flex lg:flex-row flex-col items-start lg:items-center">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 744.000000 1052.000000"
                  preserveAspectRatio="xMidYMid meet"
                  className="text-white h-52 dark:fill-white fill-black rotate-100 min-w-fit lg:mr-32 mr-12 hidden lg:block"
                >
                  <g
                    transform="translate(0.000000,1052.000000) scale(0.100000,-0.100000)"
                    stroke="none"
                  >
                    <path
                      d="M3600 8377 c-14 -7 -29 -24 -34 -38 -6 -19 28 -240 133 -859 79 -458
147 -843 151 -856 16 -41 47 -64 88 -64 32 0 67 22 262 164 124 90 228 160
232 157 11 -11 28 -183 28 -296 0 -515 -165 -1057 -453 -1488 -86 -127 -187
-260 -195 -253 -2 3 -23 47 -46 99 -160 355 -392 568 -660 608 -153 23 -338
-27 -496 -134 -67 -46 -197 -174 -242 -240 -185 -271 -182 -565 7 -816 164
-216 462 -319 767 -266 153 26 335 100 467 189 29 20 57 36 61 36 15 0 25
-152 24 -360 -1 -183 -4 -219 -28 -335 -37 -177 -86 -320 -166 -483 -197 -403
-531 -742 -730 -742 -14 0 -57 16 -96 35 -79 40 -93 42 -151 15 -84 -37 -111
-140 -53 -198 69 -70 189 -116 300 -115 173 0 345 89 543 282 288 280 505 666
601 1071 71 295 75 667 11 972 l-16 72 28 32 c188 219 275 336 378 509 194
328 326 705 386 1105 20 130 24 193 23 395 0 214 -2 251 -23 340 -12 55 -25
111 -27 125 -4 23 19 42 242 200 135 96 257 188 271 204 30 36 27 87 -9 122
-26 25 -1489 808 -1528 817 -14 3 -36 1 -50 -6z m-455 -3115 c160 -62 304
-249 420 -544 l38 -97 -24 -21 c-156 -134 -335 -219 -508 -241 -225 -30 -453
76 -538 248 -25 52 -28 68 -28 159 0 96 2 103 38 177 81 164 254 302 422 337
50 10 127 3 180 -18z"
                    />
                  </g>
                </svg>
                <div className="max-w-full overflow-hidden">
                  <p className="whitespace-normal break-words overflow-auto">
                    This is some example text that will eventually discuss some basic information about me and what I do. Currently this is placeholder text. I want it to have around 50-100 words here...
                  </p>
                </div>
              </div>
            </div>
          </div>

          <svg
            className="absolute bottom-0 right-0 lg:right-20 stroke-white opacity-15 h-1/2 lg:h-3/5 -z-0"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5 9L15.6716 9.17157C17.0049 10.5049 17.6716 11.1716 17.6716 12C17.6716 12.8284 17.0049 13.4951 15.6716 14.8284L15.5 15"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M13.2942 7.17041L12.0001 12L10.706 16.8297"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M8.49994 9L8.32837 9.17157C6.99504 10.5049 6.32837 11.1716 6.32837 12C6.32837 12.8284 6.99504 13.4951 8.32837 14.8284L8.49994 15"
              stroke-width="1.5"
              stroke-linecap="round"
            />
            <path
              d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </header>
      </div>
    </div>
  );
}

export default App;
