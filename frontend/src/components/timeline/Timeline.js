import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'

const Timeline = () => {
  return (
    <div id="parent-timeline" className="section-timeline mt-12">
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          date="2022 - present"
          iconClassName="bg-cyan-500"
          textClassName="text-left"
          icon={<FontAwesomeIcon icon={faBriefcase} />}
        >
          <h3 className="vertical-timeline-element-title  text-xl font-semibold">
            Web Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Gloversure Ltd.
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2022"
          iconClassName="bg-red-500"
          contentStyle={{
            background: "rgb(240 82 82 / var(--tw-bg-opacity))",
            color: "#fff",
          }}
          textClassName="text-left lg:text-right"
          icon={<FontAwesomeIcon icon={faGraduationCap} />}
        >
          <h3 className="vertical-timeline-element-title text-xl font-semibold">
            1st Class - BSc Business Information Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Aberystwyth University
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
