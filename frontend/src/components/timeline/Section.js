import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Section = (props) => {
  return (
    <article className="year year-2" data-timeline-section data-count="2">
      <hgroup>
        <h5 className="text-3xl title leading-none">{props.title}</h5>
        <h6 className="text-2xl sub-title">{props.subtitle}</h6>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.
        </p>
      </hgroup>
    </article>
  );
};

export default Section;
