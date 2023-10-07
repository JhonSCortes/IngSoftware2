import { memo, SVGProps } from 'react';

const Bg1Icon = (props: SVGProps<SVGSVGElement>) => (
    <svg preserveAspectRatio='none' viewBox='0 0 160 160' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={80} cy={80} r={80} fill='white' fillOpacity={0.08} />
    </svg>
);
const Memo = memo(Bg1Icon);
export { Memo as Bg1Icon };
