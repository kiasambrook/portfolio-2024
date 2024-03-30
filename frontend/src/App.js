import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/navigation/App";

function App() {
  return (
    <div className="text-black bg-cyan-50 dark:bg-gray-900 dark:text-white w-full box-border p-0 m-0 ">
      <div className="container mx-auto p-4">
        <header className="h-screen">
          <Navigation />

          <div className="banner flex lg:flex-row flex-col py-40 mx-auto lg:mx-40 text-left content-between justify-between">
            <div className="left flex flex-wrap flex-col content-start items-start">
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
                    This is some example text that will eventually discuss some
                    basic information about me and what I do. Currently this is
                    placeholder text. I want it to have around 50-100 words
                    here...
                  </p>
                  <a
                    href=""
                    className="text-red-500 link w-full hover:underline"
                  >
                    See my projects
                    <svg
                      className="inline w-4 h-4 ms-2 rtl:rotate-180 animate-bounce-x"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="right lg:w-0.5">
              <div className="lg:fixed right-10 mix-blend-difference">
                <div className="relative flex lg:flex-col flex-row items-center lg:justify-center mt-4 lg:mt-0">
                  <div className="after:block after:bg-gray-400 after:w-[1px] after:h-32 after:mx-auto after:my-2 hidden lg:block"></div>
                    <span className="text-gray-400 flex lg:flex-col">
                      {/* Github */}
                      <a href="https://github.com/kiasambrook" target="_blank" className="hover:text-black dark:hover:text-white">
                      <svg
                        className="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      </a>

                      {/* LinkedIn */}
                      <a href="https://www.linkedin.com/in/kiasambrook" target="_blank" className="hover:text-blue-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z"></path>
                      </svg>
                      </a>
                    </span>
                  </div>
                  <div className="after:block after:bg-gray-400 after:w-[1px] after:h-32 after:mx-auto after:my-2 hidden lg:block">
                </div>
              </div>
            </div>
          </div>

          {/* Background image */}
          <svg
            className="absolute bottom-0 right-0 lg:right-20 mix-blend-difference stroke-white opacity-15 h-1/2 lg:h-3/5 -z-0"
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
