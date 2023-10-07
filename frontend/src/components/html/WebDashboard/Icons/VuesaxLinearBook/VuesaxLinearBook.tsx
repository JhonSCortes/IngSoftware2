import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './VuesaxLinearBook.module.css';
import { VuesaxLinearBookIcon } from './VuesaxLinearBookIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 16:1924 */
export const VuesaxLinearBook: FC<Props> = memo(function VuesaxLinearBook(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vuesaxLinearBook}>
        <VuesaxLinearBookIcon className={classes.icon} />
      </div>
    </div>
  );
});
