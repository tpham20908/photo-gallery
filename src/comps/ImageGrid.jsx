import React from 'react';
import { Box, Grid, makeStyles } from '@material-ui/core';
import useFirestore from '../hooks/useFirestore';

const useStyles = makeStyles((theme) => ({
  gridContainer: {},
  imageContainer: {
    height: 240,
    border: `1px solid ${theme.palette.secondary}`,
    boxShadow: '0 0 10px rgba(0,0,0,0.3)',
  },
}));

const ImageGrid = () => {
  const styles = useStyles();
  const { docs } = useFirestore('images');

  return (
    <Box mt={3}>
      <Grid container spacing={3} className={styles.gridContainer}>
        {docs &&
          docs.map((doc) => (
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
              key={doc.id}
              className={styles.gridItem}
            >
              <div
                style={{
                  background: `url(${doc.url}) no-repeat center / contain`,
                }}
                className={styles.imageContainer}
              />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default ImageGrid;
