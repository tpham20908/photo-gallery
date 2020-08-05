import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import theme from './styles/theme';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Title />
        <UploadForm />
      </Container>
    </ThemeProvider>
  );
}

export default App;
