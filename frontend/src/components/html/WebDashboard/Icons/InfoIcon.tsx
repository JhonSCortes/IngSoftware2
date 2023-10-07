import { memo, SVGProps } from 'react';

const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g filter='url(#filter0_d_402_1209)'>
        <circle cx={8} cy={8} r={8} fill='white' stroke='#546FFF' strokeWidth={4} />
    </g>
    <defs>
        <filter
        id='filter0_d_402_1209'
        x={-6}
        y={-2}
        width={28}
        height={28}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
        >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2='hardAlpha' operator='out' />
        <feColorMatrix type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' />
        <feBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_402_1209' />
        <feBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_402_1209' result='shape' />
        </filter>
    </defs>
    </svg>
);
const Memo = memo(InfoIcon);
export { Memo as InfoIcon };
