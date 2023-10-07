import { memo, SVGProps } from 'react';

const VuesaxLinearArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M15 19.92L8.48 13.4C7.71 12.63 7.71 11.37 8.48 10.6L15 4.08'
      stroke='#141522'
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(VuesaxLinearArrowLeftIcon);
export { Memo as VuesaxLinearArrowLeftIcon };
