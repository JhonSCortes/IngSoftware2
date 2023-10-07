import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearCategory2.module.css';
import { VuesaxLinearCategory2Icon } from './VuesaxLinearCategory2Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 16:1902 */
export const VuesaxLinearCategory2: FC<Props> = memo(function VuesaxLinearCategory2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vuesaxLinearCategory2}>
        <VuesaxLinearCategory2Icon className={classes.icon} />
      </div>
    </div>
  );
});
