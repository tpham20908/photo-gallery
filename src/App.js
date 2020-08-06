import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import theme from './styles/theme';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Title />
        <UploadForm />
        <ImageGrid />
      </Container>
    </ThemeProvider>
  );
}

export default App;
