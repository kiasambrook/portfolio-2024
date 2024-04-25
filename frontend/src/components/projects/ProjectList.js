import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Project from "./Project";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const ProjectList = () => {
  const container = useRef();
  const left = useRef();
  useGSAP(() => {
    gsap.to(container.current, {
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom 300px",
        pin: left.current, // Change 'pin' to 'true'
      },
    });
  }, [container, left]);

  return (
    <div
      className="bg-cyan-50 h-min-screen py-32 projects"
      id="projects"
      ref={container}
    >
      <div className="container text-black flex justify-between">
        <div id="projects-left" ref={left}>
          <h3 className="text-4xl font-semibold w-1/4">My Projects</h3>
          <p>Check out some of my latest projects (more incoming)...</p>
        </div>
        <div className="projects flex justify-around w-3/4 flex-wrap ">
          <Project
            title="Portfolio"
            img="https://picsum.photos/400/300"
            badges={[
              { colour: "blue", text: "TailwindCSS" },
              { colour: "red", text: "Laravel" },
            ]}
          />
          <Project
            title="Newry Wildlife"
            img="https://picsum.photos/400/300"
            badges={[
              { colour: "blue", text: "TailwindCSS" },
              { colour: "red", text: "Laravel" },
            ]}
          />
          <Project
            title="Study Digs"
            img="https://picsum.photos/400/300"
            badges={[
              { colour: "blue", text: "TailwindCSS" },
              { colour: "red", text: "Laravel" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
