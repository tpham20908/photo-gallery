import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import theme from './styles/theme'
import Title from './comps/Title';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='md'>
        <Title />
      </Container>
    </ThemeProvider>
  );
}

export default App;
