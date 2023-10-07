import { memo, SVGProps } from 'react';

const ChartIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg preserveAspectRatio='none' viewBox='0 0 68 68' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
        opacity={0.1}
        fillRule='evenodd'
        clipRule='evenodd'
        d='M34 68C52.7777 68 68 52.7777 68 34C68 15.2223 52.7777 0 34 0C15.2223 0 0 15.2223 0 34C0 52.7777 15.2223 68 34 68Z'
        stroke='#546FFF'
        strokeWidth={3}
    />
    <path
        d='M46.2448 65.7283C58.972 60.8133 68 48.4609 68 34C68 15.2223 52.7777 0 34 0'
        stroke='#546FFF'
        strokeWidth={3}
        strokeLinecap='round'
        strokeLinejoin='round'
    />
    </svg>
);
const Memo = memo(ChartIcon);
export { Memo as ChartIcon };
