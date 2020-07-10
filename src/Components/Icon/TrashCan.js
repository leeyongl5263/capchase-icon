import React from "react";

const TrashCan = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 4C15 2.45 15 1.46 15 0H5C5 1.46 5 2.45 5 4C3.12 4 1.87 4 0 4V6H3V20C8.71 20 10.31 20 17 20V6H20V4C16.89 4 17.67 4 15 4ZM7 2H13V4H7V2ZM15 18H5V6H15V18ZM13 16H11V8H13V16ZM9 16H7V8H9V16Z"
      fill="black"
      fill-opacity="0.87"
    />
  </svg>
);

export default TrashCan;
