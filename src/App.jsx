import { useMemo, useState } from 'react'
import './App.css'


import {  createTheme } from '@mui/material/styles';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Proyects from './components/Proyects';
import Inicio from './components/Inicio';
import AboutMe from './components/AboutMe';
import ContactForm from './components/ContactForm';
import Napbar from './components/NapBar';

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
