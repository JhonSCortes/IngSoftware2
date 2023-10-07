import resets from '../../_resets.module.css';
import classes from './VuesaxBoldBookSquare.module.css';
import { VuesaxBoldBookSquareIcon } from './VuesaxBoldBookSquareIcon.js';


export const VuesaxBoldBookSquare= (): JSX.Element => {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.vuesaxBoldBookSquare}>
        <VuesaxBoldBookSquareIcon className={classes.icon} />
      </div>
    </div>
  );
};
