import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw'
    },
  })
);

const Loader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CircularProgress color='secondary' />
    </div>
  );
};

export default Loader;
