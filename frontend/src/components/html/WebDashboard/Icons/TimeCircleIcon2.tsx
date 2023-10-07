import { memo, SVGProps } from 'react';

const TimeCircleIcon2 = (props: SVGProps<SVGSVGElement>) => (
    <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.2498 10.0005C19.2498 15.1095 15.1088 19.2505 9.9998 19.2505C4.8908 19.2505 0.7498 15.1095 0.7498 10.0005C0.7498 4.8915 4.8908 0.7505 9.9998 0.7505C15.1088 0.7505 19.2498 4.8915 19.2498 10.0005Z'
        stroke='#54577A'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
    />
    <path
        d='M13.4314 12.9429L9.6614 10.6939V5.8469'
        stroke='#54577A'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
    />
    </svg>
);
const Memo = memo(TimeCircleIcon2);
export { Memo as TimeCircleIcon2 };
