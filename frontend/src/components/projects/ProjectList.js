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
            img="./portfolio.png"
            badges={[
              { colour: "blue", text: "TailwindCSS" },
              { colour: "cyan", text: "React" },
              { colour: "red", text: "Laravel" },
            ]}
            description="This is my personal portfolio website (the website you are currently on), and I built this site to try build on my frontend and laravel skills. It is still a WIP so check back regularly for any changes (although I'm working on the backend at the moment)!"
            link="https://kiasambrook.co.uk"
            repo="https://github.com/kiasambrook/portfolio-2024"
          />
          <Project
            title="Newry Wildlife"
            img="./newry-wildlife.png"
            badges={[
              { colour: "blue", text: "TailwindCSS" },
              { colour: "gray", text: "Wordpress" },
            ]}
            description="Newry Wildlife is a Wordpress site that was built to advertise nature walks and workshops that take place in Newry, Northen Ireland. It has an API integration with Eventbrite which pulls down their latest events, and uses a custom post type to create posts on biodioversity. I am very familiar in working with Worpdress, using ACF, and working with custom post types and taxonomies, but, this project also gave me the oppurtunity to delve into Tailwind CSS as I was given freereign on the frontend."
            link="https://newrywildlife.com"
            repo="https://github.com/kiasambrook/Newry-Wildlife"
          />
          <Project
            title="Study Digs"
            img="https://picsum.photos/400/300"
            badges={[
              { colour: "purple", text: "Bootstrap" },
              { colour: "green", text: "PHP" },
            ]}
            description={`Study Digs is a student accommodation finder built for my final project at university. The aim of the site was to allow landlords to upload student properties to the site and students could filter by their unviersity to get all properties that were nearby. The site made API calls to geoencode the properties' and unviersities' locations and then calculated the distance a property was from the nearest universities. I was later awarded the "Best Web Based Major Project" award for this project from my university.`}
            repo="https://github.com/kiasambrook/studydigs-src"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
