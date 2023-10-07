/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  opacity: string;
  className: any;
}

export const Property1Twotone2 = ({ opacity = "unset", className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-1-twotone-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
        stroke="#141522"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M7.75 12L10.58 14.83L16.25 9.17"
        opacity={opacity}
        stroke="#141522"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <g className="g" opacity="0" />
    </svg>
  );
};

Property1Twotone2.propTypes = {
  opacity: PropTypes.string,
};
