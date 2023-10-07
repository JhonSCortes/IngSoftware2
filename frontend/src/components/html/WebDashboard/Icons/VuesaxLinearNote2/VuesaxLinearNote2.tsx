import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearNote2.module.css';
import { VuesaxLinearNote2Icon } from './VuesaxLinearNote2Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 33:2066 */
export const VuesaxLinearNote2: FC<Props> = memo(function VuesaxLinearNote2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vuesaxLinearNote2}>
        <VuesaxLinearNote2Icon className={classes.icon} />
      </div>
    </div>
  );
});
