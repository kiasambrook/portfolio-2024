import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineElement from "./TimelineElement";
import { Flowbite } from "flowbite-react";
import { useThemeMode } from "flowbite-react";

const Timeline = () => {
  const themeMode = useThemeMode().mode
  return (
    <div id="parent-timeline" className="section-timeline mt-24">
      <VerticalTimeline
      lineColor={themeMode == 'dark' ? "white" : "rgb(17 24 39)"}
      >
        <TimelineElement
          type="work"
          title="Web Developer"
          subtitle="Gloversure Ltd."
          content="Backend development, Wordpress, API integration, Collabroating with team"
          date="2022 - 2024"
        />
        <TimelineElement
          type="education"
          title="1st Class - BSc Business Information Technology"
          subtitle="Aberystwyth University"
          content="A degree that focused on business information and web development. Also, completed modules relating to computer science theory"
          date="2019 - 2022"
        />
        <TimelineElement
          type="work"
          title="Computer Science Demonstrator"
          subtitle="Aberystwyth University"
          content="Working with students in computer science workshops to solve problems and answer questions. "
          date="2021 - 2022"
        />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
