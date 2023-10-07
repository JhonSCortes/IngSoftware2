import { memo, SVGProps } from 'react';

const VuesaxLinearNote2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M21.66 10.44L20.68 14.62C19.84 18.23 18.18 19.69 15.06 19.39C14.56 19.35 14.02 19.26 13.44 19.12L11.76 18.72C7.59 17.73 6.3 15.67 7.28 11.49L8.26 7.3C8.46 6.45 8.7 5.71 9 5.1C10.17 2.68 12.16 2.03 15.5 2.82L17.17 3.21C21.36 4.19 22.64 6.26 21.66 10.44Z'
      stroke='#54577A'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M15.06 19.39C14.44 19.81 13.66 20.16 12.71 20.47L11.13 20.99C7.16 22.27 5.07 21.2 3.78 17.23L2.5 13.28C1.22 9.31 2.28 7.21 6.25 5.93L7.83 5.41C8.24 5.28 8.63 5.17 9 5.1C8.7 5.71 8.46 6.45 8.26 7.3L7.28 11.49C6.3 15.67 7.59 17.73 11.76 18.72L13.44 19.12C14.02 19.26 14.56 19.35 15.06 19.39Z'
      stroke='#54577A'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M12.64 8.53L17.49 9.76' stroke='#54577A' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M11.66 12.4L14.56 13.14' stroke='#54577A' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(VuesaxLinearNote2Icon);
export { Memo as VuesaxLinearNote2Icon };
