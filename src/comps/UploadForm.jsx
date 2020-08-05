import React, { useState } from 'react';
import { Box, Button, Typography } from '@material-ui/core';

import ProgressBar from './ProgressBar';

const types = ['image/png', 'image/jpeg'];

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg).');
    }
  };

  return (
    <Box display="flex" alignItems="center">
      <Button variant="contained" component="label" color="secondary">
        Upload File
        <input
          type="file"
          style={{ display: 'none' }}
          onChange={handleChange}
        />
      </Button>
      {error && <Typography color="error">{error}</Typography>}
      {file && (
        <Typography color="secondary" style={{ margin: '0 12px' }}>
          {file.name}
        </Typography>
      )}
      {file && <ProgressBar file={file} setFile={setFile} />}
    </Box>
  );
};

export default UploadForm;
