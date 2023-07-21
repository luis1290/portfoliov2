import { AppBar, Box, Grid, Link, Toolbar, Typography } from '@mui/material';


const Footer = () => {


  return (
    <AppBar position="static" >
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Box sx={{ justifyContent: 'center' }}>
          <Grid container sx={{ justifyContent: 'center' }} spacing={4} justify="center" alignItems="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box sx={{ justifyContent: 'center' }}>
                <Typography align="center" gutterBottom>
                  Redes sociales
                </Typography>
                <Grid container spacing={4} justify="center" alignItems="center">
                  <Grid item xs={12} sm={6} md={4}>
                    <Typography color="text.primary"
                      variant="h3" textAlign={'center'}>
                      <Link href='https://www.linkedin.com/in/luis-ad%C3%A1n-g%C3%B3mez-torres-8b9b7811b/' color="text.secondary" target="_blank">
                        <i className='bx bxl-linkedin-square'></i>
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4}>
                    <Typography color="text.primary"
                      variant="h3" textAlign={'center'}>
                      <Link href='https://github.com/luis1290' color="text.secondary" target="_blank">
                        <i className='bx bxl-github' ></i>
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <Typography
                textAlign={'center'} gutterBottom>
                &copy; 2023, Luis Adán Gómez Torres
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;