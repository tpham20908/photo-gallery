import React, { useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@material-ui/core';

import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    url && setFile(null);
  }, [url, setFile]);

  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="static" value={progress} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="caption"
          component="div"
          color="secondary"
        >{`${Math.round(progress)}%`}</Typography>
      </Box>
    </Box>
  );
};

export default ProgressBar;
