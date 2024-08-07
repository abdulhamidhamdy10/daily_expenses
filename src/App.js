import './App.css';

// import Home from './Pages/Home';
import Slidebar from './Components/Sllidebar'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';

function App() {

  const [mymode,setmymode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mymode,
    },
  });

  return (
    
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Slidebar setmymode={setmymode} />
    </ThemeProvider>
  );
}

export default App;
