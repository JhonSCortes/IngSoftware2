import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearMore.module.css';
import { VuesaxLinearMoreIcon } from './VuesaxLinearMoreIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 33:2660 */
export const VuesaxLinearMore: FC<Props> = memo(function VuesaxLinearMore(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vuesaxLinearMore}>
        <VuesaxLinearMoreIcon className={classes.icon} />
      </div>
    </div>
  );
});
