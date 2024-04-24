import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef, useEffect } from "react";
import Section from "./Section";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Timeline = () => {
  const timelineContainerRef = useRef(null);
  const { timeline, ...rest } = useGSAP(gsap);

  useEffect(() => {
    initTimeline();
  }, []);

  function initTimeline() {
    const timelineContainer = timelineContainerRef.current;
    const sections = timelineContainer.querySelectorAll(
      "[data-timeline-section]"
    );

    const vh = (coef) => window.innerHeight * (coef / 100);

    let parentST = ScrollTrigger.create({
      id: "parent-timeline",
      trigger: timelineContainer,
      start: "top top",
      toggleClass: "started",
      pin: true,
      markers: false,
      end: () => "+=" + (sections.length - 1) * vh(80),
    });

    let currentSection;

    function goto(section, i) {
      if (currentSection !== section) {
        gsap.to(timelineContainer, {
          y: -48 * i,
          duration: 0.6,
          overwrite: true,
        });
        let tl = gsap.timeline({ defaults: { overwrite: true } });
        if (currentSection) {
          tl.to(currentSection.querySelector(".title"), {
            fontSize: "2rem",
          });
          tl.to(
            currentSection,
            {
              maxHeight: "3rem",
            },
            0
          );
          tl.to(
            currentSection.querySelectorAll("p"),
            {
              opacity: 0,
              duration: 0.25,
              maxHeight: "0%",
            },
            0
          );
        }
        currentSection = section;
        if (section) {
          tl.to(
            section.querySelector(".title"),
            {
              fontSize: "4rem",
            },
            0
          );
          tl.to(
            section,
            {
              maxHeight: "80vh",
            },
            0
          );
          tl.fromTo(
            section.querySelectorAll("p"),
            { maxHeight: "0%" },
            {
              opacity: 1,
              maxHeight: "100%",
            }
          );
        }
      }
    }

    sections.forEach((sct, i) => {
      let sct_index = sct.getAttribute("data-count");

      ScrollTrigger.create({
        start: () => parentST.start + i * window.innerHeight * 0.4,
        end: () => "+=" + window.innerHeight * 0.4,
        markers: false,
        onLeaveBack: () => i || goto(null, 0),
        onToggle: (self) => self.isActive && goto(sct, sct_index),
      });
    });
  }

  return (
    <div
      id="parent-timeline"
      className="section-timeline"
      ref={timelineContainerRef}
    >
      <div className="timeline-container">
        <Section
        title="Web Developer"
        subtitle="Gloversure"
        />
        <Section
        title="Bsc Business IT"
        subtitle="Aberystwyth University"
        />
      </div>
    </div>
  );
};

export default Timeline;
