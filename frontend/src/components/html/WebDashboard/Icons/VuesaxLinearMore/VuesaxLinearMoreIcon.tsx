import { memo, SVGProps } from 'react';

const VuesaxLinearMoreIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M4.16667 8.33333C3.25 8.33333 2.5 9.08333 2.5 10C2.5 10.9167 3.25 11.6667 4.16667 11.6667C5.08333 11.6667 5.83333 10.9167 5.83333 10C5.83333 9.08333 5.08333 8.33333 4.16667 8.33333Z'
      fill='#141522'
      stroke='#141522'
    />
    <path
      d='M15.8333 8.33333C14.9167 8.33333 14.1667 9.08333 14.1667 10C14.1667 10.9167 14.9167 11.6667 15.8333 11.6667C16.75 11.6667 17.5 10.9167 17.5 10C17.5 9.08333 16.75 8.33333 15.8333 8.33333Z'
      fill='#141522'
      stroke='#141522'
    />
    <path
      d='M10 8.33333C9.08333 8.33333 8.33333 9.08333 8.33333 10C8.33333 10.9167 9.08333 11.6667 10 11.6667C10.9167 11.6667 11.6667 10.9167 11.6667 10C11.6667 9.08333 10.9167 8.33333 10 8.33333Z'
      fill='#141522'
      stroke='#141522'
    />
  </svg>
);
const Memo = memo(VuesaxLinearMoreIcon);
export { Memo as VuesaxLinearMoreIcon };
