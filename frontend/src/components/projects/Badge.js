import React from "react";

const Badge = ({ colour, text }) => {
  return (
    <div className="tags bottom-0  transition-transform ease-in-out group-hover:bottom-10">
      <span
        className={
          "badge inline-flex items-center rounded-md bg-" +
          colour +
          "-200 px-2 py-1 text-xs font-medium text-" +
          colour +
          "-700 ring-1 ring-inset ring-" +
          colour +
          "-700/10"
        }
      >
        {text}
      </span>
    </div>
  );
};

export default Badge;
