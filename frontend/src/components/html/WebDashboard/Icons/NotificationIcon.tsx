import { memo, SVGProps } from 'react';

const NotificationIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg preserveAspectRatio='none' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M0.500825 11.7871V11.5681C0.532951 10.9202 0.740599 10.2925 1.10236 9.74961C1.7045 9.09746 2.1167 8.29831 2.29571 7.43598C2.29571 6.7695 2.29571 6.0935 2.35393 5.42703C2.65469 2.21842 5.82728 0 8.96106 0H9.03867C12.1725 0 15.345 2.21842 15.6555 5.42703C15.7137 6.0935 15.6555 6.7695 15.704 7.43598C15.8854 8.3003 16.2972 9.10194 16.8974 9.75913C17.2618 10.2972 17.4698 10.9227 17.4989 11.5681V11.7776C17.5206 12.648 17.2208 13.4968 16.6548 14.1674C15.907 14.9515 14.8921 15.4393 13.8024 15.5384C10.607 15.8812 7.38303 15.8812 4.18762 15.5384C3.09914 15.435 2.08576 14.9479 1.33521 14.1674C0.778 13.4963 0.482241 12.6526 0.500825 11.7871Z'
        stroke='#8E92BC'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
    />
    <path
        d='M6.55494 18.8518C7.05421 19.4784 7.7874 19.884 8.59223 19.9787C9.39706 20.0734 10.2072 19.8495 10.8433 19.3564C11.0389 19.2106 11.2149 19.041 11.3672 18.8518'
        stroke='#8E92BC'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
    />
    </svg>
);
const Memo = memo(NotificationIcon);
export { Memo as NotificationIcon };
