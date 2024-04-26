import React from "react";

const Badge = ({ colour, text }) => {
  return (
    <span
      className={`badge inline-flex items-center rounded-md bg-${colour}-200 px-2 py-1 text-xs font-medium text-${colour}-700 `}
    >
      {text}
    </span>
  );
};

export default Badge;
