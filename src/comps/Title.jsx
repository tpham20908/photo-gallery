import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {}
}))

const Title = () => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Typography variant='h2' color='primary'>Felix Photo Gallery</Typography>
      <Typography variant='h4' color='secondary' align='center' >Your Pictures</Typography>
      <Typography align='center'>Lorem isum dolor sit amet, consectetur adipiscing elit.</Typography>
    </div>
  )
}

export default Title;