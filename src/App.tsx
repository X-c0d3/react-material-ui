import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './providers/authProvider';
import { Routes } from './routes/routes';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './layouts/theme';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <BrowserRouter children={Routes} basename={'/'} />
      </ThemeProvider>
    </AuthProvider>
  );
}
