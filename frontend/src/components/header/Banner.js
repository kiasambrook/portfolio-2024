import React from "react";
import CurlyArrow from "./../svgs/curly";
import GitHub from "./../svgs/github";
import Linkedin from "./../svgs/linkedin";
import gsap from 'gsap'
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin)

const scrollToProjects = () => {
  gsap.to(window, {duration: 0.5, scrollTo:{y:"#projects", autoKill: true}});
}

const Banner = () => {
  return (
      <div className="banner flex lg:flex-row flex-col py-40 mx-auto lg:mx-40 text-left content-between justify-between">
        <div className="left flex flex-wrap flex-col content-start items-start">
          <h2 className="text-5xl font-black">
            Hi, I'm <span className="text-red-500">Kia</span>...
          </h2>
          <div className="lg:flex lg:flex-row flex-col items-start lg:items-center">
            <CurlyArrow className="text-white h-52 dark:fill-white fill-black rotate-100 min-w-fit lg:mr-32 mr-12 hidden lg:block" />
            <div className="max-w-full overflow-hidden">
              <p className="whitespace-normal break-words overflow-auto">
                This is some example text that will eventually discuss some
                basic information about me and what I do. Currently this is
                placeholder text. I want it to have around 50-100 words here...
              </p>
              <p onClick={scrollToProjects} className="text-red-500 cursor-pointer link w-full hover:underline" aria-label="See my previous projects.">
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </p>
            </div>
          </div>
        </div>

        <div className="right lg:w-0.5">
          <div className="lg:fixed right-10 mix-blend-difference">
            <div className="relative flex lg:flex-col flex-row items-center lg:justify-center mt-4 lg:mt-0">
              <div className="after:block after:bg-gray-400 after:w-[1px] after:h-32 after:mx-auto after:my-2 hidden lg:block"></div>
              <span className="text-gray-400 flex lg:flex-col">
                <a
                  href="https://github.com/kiasambrook"
                  aria-label="Visit my GitHub page"
                  target="_blank"
                  className="hover:text-black dark:hover:text-white"
                >
                  <GitHub className="w-10 h-10" />
                </a>
                <a
                  href="https://www.linkedin.com/in/kiasambrook"
                  target="_blank"
                  aria-label="Visit my personal Linkedin page"
                  className="hover:text-blue-500"
                >
                  <Linkedin className="w-10 h-10" />
                </a>
              </span>
            </div>
            <div className="after:block after:bg-gray-400 after:w-[1px] after:h-32 after:mx-auto after:my-2 hidden lg:block"></div>
          </div>
        </div>
      </div>
  );
};

export default Banner;
