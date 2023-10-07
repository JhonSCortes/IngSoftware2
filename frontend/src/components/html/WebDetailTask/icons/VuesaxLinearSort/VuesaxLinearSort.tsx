/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const VuesaxLinearSort = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`vuesax-linear-sort ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M3 7H21" stroke="#8E92BC" strokeLinecap="round" strokeWidth="1.5" />
      <path className="path" d="M6 12H18" stroke="#8E92BC" strokeLinecap="round" strokeWidth="1.5" />
      <path className="path" d="M10 17H14" stroke="#8E92BC" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
};
