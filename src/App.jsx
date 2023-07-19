import { useMemo, useState } from 'react'
import './App.css'
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AppBar, Link, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { HashRouter, Route, Routes, useNavigate } from 'react-router-dom';

import Napbar from './components/Napbar';
import Proyects from './components/Proyects';
import Inicio from './components/Inicio';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';

function App() {
  const [mode, setMode] = useState('light');



  //modo oscuro
  // const theme = useTheme();
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {

        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        console.log(mode)
      },
    }),
    [],
  );

  const themeGlobal = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
 
  
  return (
    <>
      <HashRouter>
        <Napbar themeGlobal={themeGlobal} colorMode={colorMode} />
        <Routes>
          <Route path='/' element={<Inicio themeGlobal={themeGlobal} />} />
          <Route path='/aboutme' element={<AboutMe themeGlobal={themeGlobal} />} />
          <Route path='/proyects' element={<Proyects themeGlobal={themeGlobal} />} />
          <Route path='/contact' element={<ContactForm themeGlobal={themeGlobal} />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
