import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconlyLightTimeCircle.module.css';
import { TimeCircleIcon } from './TimeCircleIcon.js';

interface Props {
  className?: string;
  swap?: {
    timeCircle?: ReactNode;
  };
}
/* @figmaId 33:1792 */
export const IconlyLightTimeCircle: FC<Props> = memo(function IconlyLightTimeCircle(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.timeCircle}>{props.swap?.timeCircle || <TimeCircleIcon className={classes.icon} />}</div>
    </div>
  );
});
