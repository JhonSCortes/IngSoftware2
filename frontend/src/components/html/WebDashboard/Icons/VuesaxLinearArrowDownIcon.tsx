import { memo, SVGProps } from 'react';

const VuesaxLinearArrowDownIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
        d='M9.96 4.475L6.7 7.735C6.315 8.12 5.685 8.12 5.3 7.735L2.04 4.475'
        stroke='#54577A'
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap='round'
        strokeLinejoin='round'
    />
    </svg>
);
const Memo = memo(VuesaxLinearArrowDownIcon);
export { Memo as VuesaxLinearArrowDownIcon };
