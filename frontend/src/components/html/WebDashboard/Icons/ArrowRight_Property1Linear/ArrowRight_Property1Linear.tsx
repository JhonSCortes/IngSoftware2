import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ArrowRight_Property1Linear.module.css';
import { VuesaxLinearArrowRightIcon } from './VuesaxLinearArrowRightIcon.js';

interface Props {
  className?: string;
  classes?: {
    vuesaxLinearArrowRight?: string;
    root?: string;
  };
  swap?: {
    vuesaxLinearArrowRight?: ReactNode;
  };
}
/* @figmaId 33:1741 */
export const ArrowRight_Property1Linear: FC<Props> = memo(function ArrowRight_Property1Linear(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.vuesaxLinearArrowRight || ''} ${classes.vuesaxLinearArrowRight}`}>
        {props.swap?.vuesaxLinearArrowRight || <VuesaxLinearArrowRightIcon className={classes.icon} />}
      </div>
    </div>
  );
});
