/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const SearchNormal = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`search-normal ${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_20_1619)">
        <path
          className="path"
          d="M9.58332 17.5001C13.9556 17.5001 17.5 13.9557 17.5 9.58341C17.5 5.21116 13.9556 1.66675 9.58332 1.66675C5.21107 1.66675 1.66666 5.21116 1.66666 9.58341C1.66666 13.9557 5.21107 17.5001 9.58332 17.5001Z"
          stroke="#8E92BC"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          className="path"
          d="M18.3333 18.3334L16.6667 16.6667"
          stroke="#8E92BC"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
      <defs className="defs">
        <clipPath className="clip-path" id="clip0_20_1619">
          <rect className="rect" fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};
