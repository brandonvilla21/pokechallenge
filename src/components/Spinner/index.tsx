import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  placeholder: {
    height: 40,
  }
}));

interface SpinnerProps {
  loading: boolean
}

const Spinner: FunctionComponent<SpinnerProps> = ({ loading }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.placeholder}>
        <Fade
          in={loading}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
      </div>
    </div>
  )
}

export default Spinner