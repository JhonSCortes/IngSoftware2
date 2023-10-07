import { memo, SVGProps } from 'react';

const CartIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg preserveAspectRatio='none' viewBox='0 0 358 73' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
        d='M0 81L44.5556 57.1899C53.1341 52.6056 63.4026 52.4648 72.1036 56.8121L102.901 72.1997C113.595 77.5426 126.44 76.0269 135.596 68.3418L164.389 44.1759C174.437 35.7419 188.801 34.8153 199.85 41.8884L227.53 59.6082C236.517 65.3609 247.882 65.9076 257.379 61.0439L291.692 43.4713C297.273 40.6133 303.609 39.5756 309.81 40.5042L358 47.7203'
        stroke='#EBEDF7'
        strokeWidth={3}
        strokeLinecap='round'
    />
    <path
        d='M0 72.5323L43.075 44.9568C53.8587 38.0533 67.8354 38.755 77.8735 46.7037L97.7027 62.4056C110.678 72.6798 129.522 70.5059 139.816 57.5474L160.794 31.1414C171.599 17.5411 191.66 15.9306 204.496 27.633L226.418 47.6201C235.45 55.8537 248.572 57.7861 259.593 52.5055L291.3 37.3134C296.601 34.7734 302.532 33.8468 308.355 34.6486L358 41.4839'
        stroke='#141522'
        strokeWidth={3}
        strokeLinecap='round'
    />
    </svg>
);
const Memo = memo(CartIcon);
export { Memo as CartIcon };
