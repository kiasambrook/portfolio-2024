import React from "react";
import CurlyArrow from "./../svgs/curly";
import gsap from 'gsap'
import ScrollToPlugin from "gsap/ScrollToPlugin";
import TypeIt from "typeit-react";

gsap.registerPlugin(ScrollToPlugin)

const scrollToProjects = () => {
  gsap.to(window, {duration: 0.5, scrollTo:{y:"#projects", autoKill: true}});
}

const Banner = () => {
  return (
      <div className="banner flex lg:flex-row flex-col py-40 mx-auto lg:mx-40 text-left content-between justify-between">
        <div className="left flex flex-wrap flex-col content-start items-start mt-4 md:mt-0">
          <TypeIt as={"h2"}
          className="text-5xl font-black">
            Hi, I'm <span className="text-red-500">Kia</span>...
            <br />
            Web Developer
          </TypeIt>
          <div className="lg:flex lg:flex-row flex-col items-start lg:items-center">
            <CurlyArrow className="text-gray-900 dark:text-white h-52  rotate-100 min-w-fit lg:mr-32 mr-12 hidden lg:block" />
            <div className="max-w-full overflow-hidden">
              <p className="whitespace-normal break-words overflow-auto">
                I am a full stack web developer currently based in Wales. I specialise in PHP, but I like to dabble in JS including React and Typescript too.
              </p>
              <button onClick={scrollToProjects} className="text-red-500 cursor-pointer my-3  p-0 link hover:underline" aria-label="See my previous projects.">
                Check out my existing projects
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
              </button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Banner;
