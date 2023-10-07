/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const VuesaxBoldBookSquare = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`vuesax-bold-book-square ${className}`}
      fill="none"
      height="40"
      viewBox="0 0 40 40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M26.9834 3.33333H13.0167C6.95004 3.33333 3.33337 6.95 3.33337 13.0167V26.9667C3.33337 33.05 6.95004 36.6667 13.0167 36.6667H26.9667C33.0334 36.6667 36.65 33.05 36.65 26.9833V13.0167C36.6667 6.95 33.05 3.33333 26.9834 3.33333ZM19.1667 28.75C19.1667 29.35 18.5667 29.75 18.0167 29.5167C16 28.65 13.3667 27.85 11.5334 27.6167L11.2167 27.5833C10.2 27.45 9.36671 26.5 9.36671 25.4667V12.6333C9.36671 11.35 10.4 10.4 11.6667 10.5C13.75 10.6667 16.8334 11.6667 18.7667 12.7667C19.0334 12.9167 19.1667 13.2 19.1667 13.4833V28.75ZM30.6334 25.45C30.6334 26.4833 29.8 27.4333 28.7834 27.5667L28.4334 27.6C26.6167 27.85 24 28.6333 21.9834 29.4833C21.4334 29.7167 20.8334 29.3167 20.8334 28.7167V13.4667C20.8334 13.1667 20.9834 12.8833 21.25 12.7333C23.1834 11.65 26.2 10.6833 28.25 10.5H28.3167C29.6 10.5 30.6334 11.5333 30.6334 12.8167V25.45Z"
        fill="#546FFF"
      />
    </svg>
  );
};
