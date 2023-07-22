import { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AppBar, Link, Menu, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';


const Napbar = ({ themeGlobal, colorMode }) => {

  const navigate = useNavigate()

  const handleClick = (route) => {
    // Navegar a otra ruta
    navigate(route);
  };


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);





  return (
    <ThemeProvider theme={themeGlobal}>
      <Box>
        <AppBar position="static">
          <Toolbar variant="dense">
            {/* menu responsive */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link onClick={() => handleClick('/')} color="inherit" underline="none">
                      {'Inicio'}
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link onClick={() => handleClick('/aboutme')} color="inherit" underline="none">
                      {'Acerca De Mí'}
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link onClick={() => handleClick('/proyects')} color="inherit" underline="none">
                      {' Proyectos'}
                    </Link>
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link onClick={() => handleClick('/contact')} color="inherit" underline="none">
                      {' Contacto'}
                    </Link>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
            {/*Fin menu responsive */}

            {/* menu desktop */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', alignItems: 'center', justifyContent: 'center' } }}>
              <Box className='link' sx={{
                marginRight: '10px',
                '&:hover': {
                  backgroundColor: 'inherit',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}>
                <Link onClick={() => handleClick('/')} underline="none" color="inherit">
                  <Typography textAlign="center" sx={{ my: 2, color: 'white', display: 'block' }} >
                    {'Inicio'}
                  </Typography>
                </Link>
              </Box>
              <Box className='link' sx={{
                marginRight: '10px',
                '&:hover': {
                  backgroundColor: 'inherit',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}>
                <Link onClick={() => handleClick('/aboutme')} underline="none" color="inherit">
                  <Typography textAlign="center" sx={{ my: 2, color: 'white', display: 'block' }} >
                    {'Acerca De Mí'}
                  </Typography>
                </Link>
              </Box>
              <Box className='link' sx={{
                marginRight: '10px',
                '&:hover': {
                  backgroundColor: 'inherit',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}>
                <Link onClick={() => handleClick('/proyects')} color="inherit" underline="none" >
                  <Typography textAlign="center" sx={{ my: 2, color: 'white', display: 'block' }} >
                    {'Proyectos'}
                  </Typography>
                </Link>
              </Box>
              <Box className='link' sx={{
                marginRight: '10px',
                '&:hover': {
                  backgroundColor: 'inherit',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}>
                <Link onClick={() => handleClick('/contact')} color="inherit" underline="none" >
                  <Typography textAlign="center" sx={{ my: 2, color: 'white', display: 'block' }} >
                    {'Contacto'}
                  </Typography>
                </Link>
              </Box>
              <Box sx={{
                marginRight: '10px',
                '&:hover': {
                  backgroundColor: 'inherit',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}>

              </Box>
              <Box sx={{
                marginRight: '10px',
                '&:hover': {
                  backgroundColor: 'inherit',
                  opacity: [0.9, 0.8, 0.7],
                },
              }}>
              </Box>
            </Box>
            {/*Fin menu Desktop */}

            {/* boton modo dark y ligth */}
            <Box sx={{ flexGrow: 0 }}>
              <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                {themeGlobal.palette.mode === 'dark' ? <Brightness4Icon /> : < Brightness7Icon />}
              </IconButton>
            </Box>
            {/*Fin boton modo dark y ligth */}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>

  );
};

export default Napbar;