import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import TimelineElement from "./Element";

const Timeline = () => {
  return (
    <div id="parent-timeline" className="section-timeline mt-24">
      <VerticalTimeline>
        <TimelineElement
          type="work"
          title="Web Developer"
          subtitle="Gloversure Ltd."
          content="Creative Direction, User Experience, Visual Design, Project
        Management, Team Leading"
          date="2022 - present"
        />
        <TimelineElement
          type="education"
          title="1st Class - BSc Business Information Technology"
          subtitle="Aberystwyth University"
          content="Creative Direction, User Experience, Visual Design, Project
      Management, Team Leading"
          date="2019 - 2022"
        />
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
