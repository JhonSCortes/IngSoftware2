import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearUserOctagon.module.css';
import { VuesaxLinearUserOctagonIcon } from './VuesaxLinearUserOctagonIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 17:1345 */
export const VuesaxLinearUserOctagon: FC<Props> = memo(function VuesaxLinearUserOctagon(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vuesaxLinearUserOctagon}>
        <VuesaxLinearUserOctagonIcon className={classes.icon} />
      </div>
    </div>
  );
});
