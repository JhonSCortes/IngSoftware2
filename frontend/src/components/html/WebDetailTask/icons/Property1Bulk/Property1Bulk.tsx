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

export const Property1Bulk = ({ opacity = "unset", className }: Props): JSX.Element => {
  return (
    <svg
      className={`property-1-bulk ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        fill="#141522"
        opacity={opacity}
      />
      <path
        className="path"
        d="M21.3 22C21.12 22 20.94 21.93 20.81 21.8L18.95 19.94C18.68 19.67 18.68 19.23 18.95 18.95C19.22 18.68 19.66 18.68 19.94 18.95L21.8 20.81C22.07 21.08 22.07 21.52 21.8 21.8C21.66 21.93 21.48 22 21.3 22Z"
        fill="#141522"
      />
      <g className="g" opacity="0" />
    </svg>
  );
};

Property1Bulk.propTypes = {
  opacity: PropTypes.string,
};
