

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearMessage.module.css';
import { VuesaxLinearMessageIcon } from './VuesaxLinearMessageIcon.js';

export const VuesaxLinearMessage= (): JSX.Element => {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vuesaxLinearMessage}>
        <VuesaxLinearMessageIcon className={classes.icon} />
      </div>
    </div>
  );
};
