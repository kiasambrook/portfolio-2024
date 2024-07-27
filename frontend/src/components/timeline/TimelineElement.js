import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

const TimelineElement = (props) => {
  let iconBg = "bg-cyan-500";
  let contentBg = "rgb(6 182 212 / var(--tw-bg-opacity))";
  let textPos = "text-left";
  let icon = faBriefcase;

  if (props.type == "education") {
    iconBg = "bg-red-500";
    contentBg = "rgb(240 82 82 / var(--tw-bg-opacity))";
    icon = faGraduationCap;
  }

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--education w-10/12 xl:w-full"
      contentStyle={{
        background: contentBg,
        color: "#fff",
      }}
      date={props.date}
      iconClassName={iconBg}
      textClassName={textPos}
      icon={<FontAwesomeIcon icon={icon} />}
    >
      <h3 className="vertical-timeline-element-title  text-xl font-semibold">
        {props.title}
      </h3>
      <h4 className="vertical-timeline-element-subtitle">{props.subtitle}</h4>
      <p>{props.content}</p>
    </VerticalTimelineElement>
  );
};

export default TimelineElement;
