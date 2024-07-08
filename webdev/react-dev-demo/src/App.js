import './App.css';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

function App() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className='App'>
        Hello, from react!
      </div>
    </ThemeProvider>
  );
}

export default App;
