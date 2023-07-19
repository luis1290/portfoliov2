import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, InputLabel, ThemeProvider, Typography } from '@mui/material';

import { Slide } from "react-awesome-reveal";
import Footer from './Footer';

const Proyects = ({ themeGlobal }) => {

  const handleOpenWebsite = (url) => {
    window.open(url, '_blank');
  };
  return (
    <Slide duration={4000}>
      <ThemeProvider theme={themeGlobal}>
        <main>
          <Box sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}>
            <Container sx={{ py: 8 }} maxWidth="sm" >
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Mis Proyectos
              </Typography>

              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Algunos de mis proyctos echos con React.js
              </Typography>
            </Container>

            <Container sx={{ py: 8 }} maxWidth="md">
              <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                      }}
                      image="/public/E-commerce.jpg"
                    />

                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Proyecto e-commerce
                      </Typography>
                      <Typography>
                        Proyecto de e-commerce con React.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => handleOpenWebsite('https://e-commercereactapp.netlify.app/')} size="small">Demo</Button>
                      <Button onClick={() => handleOpenWebsite('https://github.com/Vinii21/e-comerce')} size="small">GitHub</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                      }}
                      image="/public/66AM3SSB3ZGSJNU2TQAVJNHIWE.jpg"
                    />

                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Proyecto Pokedesck
                      </Typography>
                      <Typography>
                        Proyecto API Pokedesk.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => handleOpenWebsite('https://pokedexapirlv.netlify.app')} size="small">Demo</Button>
                      <Button onClick={() => handleOpenWebsite('https://github.com/luis1290/ApiPokedex')} size="small">GitHub</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                      }}
                      image="/public/rick-morty-critica.jpg"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Proyecto Rick and Morty
                      </Typography>
                      <Typography>
                        Proyecto con API Rick and Morty.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => handleOpenWebsite('https://rick-morty-location.netlify.app/')} size="small">Demo</Button>
                      <Button onClick={() => handleOpenWebsite('https://github.com/luis1290/rick-morty')} size="small">GitHub</Button>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="div"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                      }}
                      image="/public/clima-1.jpg"
                    />

                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Proyecto API Clima
                      </Typography>
                      <Typography>
                        API Clima para indicar el clima de la zona usando React.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button onClick={() => handleOpenWebsite('https://estado-clima.netlify.app/')} size="small">Demo</Button>
                      <Button onClick={() => handleOpenWebsite('https://github.com/luis1290/api-climate')} size="small">GitHub</Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </main>
        <Footer />
      </ThemeProvider>
    </Slide>
  );
};

export default Proyects;