import { useMemo, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import { AppContext, ThemeModeContext } from './contexts';
import { Layout } from './components/Layout';
import { AppClient } from './clients';
import { globalRoutes as routes } from './config';
import { getAppTheme } from './styles/theme';
import { DARK_MODE_THEME, LIGHT_MODE_THEME } from './utils/constants';

function App() {
  const [mode, setMode] = useState<typeof LIGHT_MODE_THEME | typeof DARK_MODE_THEME>(DARK_MODE_THEME);
  const appClient = new AppClient();

  const themeMode = useMemo(() => ({
    toggleThemeMode: () => {
      setMode((prevMode) => (prevMode === LIGHT_MODE_THEME ? DARK_MODE_THEME : LIGHT_MODE_THEME));
    },
  }), []
  );

  const theme = useMemo(() => getAppTheme(mode), [mode]);

  const Router = () => {
    const isLogged = false;
    return useRoutes(routes(isLogged));
  };

  return (
    <AppContext.Provider value={appClient}>
      <ThemeModeContext.Provider value={themeMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <Layout>
              <Router />
            </Layout>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeModeContext.Provider>
    </AppContext.Provider>
  );
}

export default hot(module)(App);
