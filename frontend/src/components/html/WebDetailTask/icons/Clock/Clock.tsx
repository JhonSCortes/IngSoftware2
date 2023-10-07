/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Clock = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`clock ${className}`}
      fill="none"
      height="17"
      viewBox="0 0 16 17"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M14.6667 8.49992C14.6667 12.1799 11.68 15.1666 8.00004 15.1666C4.32004 15.1666 1.33337 12.1799 1.33337 8.49992C1.33337 4.81992 4.32004 1.83325 8.00004 1.83325C11.68 1.83325 14.6667 4.81992 14.6667 8.49992Z"
        stroke="#54577A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        className="path"
        d="M10.4733 10.6199L8.40663 9.38659C8.04663 9.17326 7.7533 8.65992 7.7533 8.23992V5.50659"
        stroke="#54577A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
