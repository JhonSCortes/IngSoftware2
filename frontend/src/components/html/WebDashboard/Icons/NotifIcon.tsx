import { memo, SVGProps } from 'react';

const NotifIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg preserveAspectRatio='none' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={4} cy={4} r={4} fill='#FF4D5E' />
    </svg>
);
const Memo = memo(NotifIcon);
export { Memo as NotifIcon };
