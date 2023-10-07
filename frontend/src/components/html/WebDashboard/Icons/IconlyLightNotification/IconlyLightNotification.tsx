import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconlyLightNotification.module.css';
import { NotificationIcon } from './NotificationIcon.js';

interface Props {
  className?: string;
  swap?: {
    notification?: ReactNode;
  };
}
/* @figmaId 20:1474 */
export const IconlyLightNotification: FC<Props> = memo(function IconlyLightNotification(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.notification}>
        {props.swap?.notification || <NotificationIcon className={classes.icon} />}
      </div>
    </div>
  );
});
