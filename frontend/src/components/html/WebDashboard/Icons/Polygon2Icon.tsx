import { memo, SVGProps } from 'react';

const Polygon2Icon = (props: SVGProps<SVGSVGElement>) => (
    <svg preserveAspectRatio='none' viewBox='0 0 20 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
        d='M8.45709 12.1293C9.25706 13.0992 10.7429 13.0992 11.5429 12.1293L15.9611 6.77257C17.037 5.46809 16.1091 3.5 14.4182 3.5H5.58183C3.89089 3.5 2.963 5.46809 4.03892 6.77257L8.45709 12.1293Z'
        fill='#141522'
    />
    </svg>
);
const Memo = memo(Polygon2Icon);
export { Memo as Polygon2Icon };
