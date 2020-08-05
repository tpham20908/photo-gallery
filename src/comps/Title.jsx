import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {},
}));

const Title = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Typography variant="h2" color="primary">
        Felix Photo Gallery
      </Typography>
    </div>
  );
};

export default Title;
