import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearSetting2.module.css';
import { VuesaxLinearSetting2Icon } from './VuesaxLinearSetting2Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 17:1397 */
export const VuesaxLinearSetting2: FC<Props> = memo(function VuesaxLinearSetting2(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vuesaxLinearSetting2}>
        <VuesaxLinearSetting2Icon className={classes.icon} />
      </div>
    </div>
  );
});
