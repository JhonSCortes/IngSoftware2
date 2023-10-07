import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ArrowDown_Property1Linear.module.css';
import { VuesaxLinearArrowDownIcon } from './VuesaxLinearArrowDownIcon.js';

interface Props {
  className?: string;
  classes?: {
    vuesaxLinearArrowDown?: string;
    root?: string;
  };
  swap?: {
    vuesaxLinearArrowDown?: ReactNode;
  };
}
/* @figmaId 27:1367 */
export const ArrowDown_Property1Linear: FC<Props> = memo(function ArrowDown_Property1Linear(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.vuesaxLinearArrowDown || ''} ${classes.vuesaxLinearArrowDown}`}>
        {props.swap?.vuesaxLinearArrowDown || <VuesaxLinearArrowDownIcon className={classes.icon} />}
      </div>
    </div>
  );
});
