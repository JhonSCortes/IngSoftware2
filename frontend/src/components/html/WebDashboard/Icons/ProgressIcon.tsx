import { memo, SVGProps } from 'react';

const ProgressIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg preserveAspectRatio='none' viewBox='0 0 280 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect y={4} width={280} height={8} rx={4} fill='#BAC8FF' />
    <path d='M0 8C0 5.79086 1.79086 4 4 4H210V12H4C1.79086 12 0 10.2091 0 8V8Z' fill='#546FFF' />
    <circle cx={210} cy={8} r={8} fill='#546FFF' stroke='white' strokeWidth={2} />
    </svg>
);
const Memo = memo(ProgressIcon);
export { Memo as ProgressIcon };
