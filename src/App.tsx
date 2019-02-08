import React from 'react';
import {AppTheme} from './AppTheme';
import {Content, Footer, Header} from './components/layout/';
import {ThemeProvider} from './ThemeProvider';

const App = () => (
  <ThemeProvider>
    <AppTheme>
      <Header />
      <Content />
      <Footer />
    </AppTheme>
  </ThemeProvider>
);

export default App;
