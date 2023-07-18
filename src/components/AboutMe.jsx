import { Box, Card, CardContent, CardMedia, Container, Grid, InputLabel, Stack, ThemeProvider, Typography } from '@mui/material';
import Footer from './Footer';

import { Slide } from "react-awesome-reveal";

const AboutMe = ({ themeGlobal }) => {
  return (
    <Slide duration={4000} >
      <ThemeProvider theme={themeGlobal}>
        <main>
          <Box
            sx={{
              bgcolor: 'background.paper',
              pt: 8,
              pb: 6,
            }}
          >
            <Container sx={{ py: 8 }} maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Acerca De Mi
              </Typography>

              <Grid container spacing={2}>
                <Box sx={{
                  pt: 8,
                  pb: 6,
                }} >
                  <Grid item xs={12} sm={12} md={12}>
                    <Typography
                      align="center"
                      color="text.primary"
                      variant="h6"
                    >
                      Deseo aplicar mis habilidades y capacidades adquiridas durante mi carrera académica. Al mismo tiempo, busco
                      aprender más para alcanzar mayores niveles de conocimiento y poder aplicarlos en el desarrollo productivo de
                      la institución en la que tenga la oportunidad de hacerlo.
                    </Typography>
                  </Grid>
                </Box>
                <Box>
                  <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={4}>
                      <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        elevation={4}
                      >

                        <CardMedia component="div">
                          <Typography variant='h3' textAlign="center" color="text.primary">HTML5</Typography>
                        </CardMedia>

                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography textAlign="center">
                            Experiencia en HTML como desarrollador junior, con conocimiento sólido en la creación de páginas web
                            estáticas utilizando HTML5
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        elevation={4}
                      >
                        <CardMedia component="div">
                          <Typography variant='h3' textAlign="center" color="text.primary">CSS3</Typography>
                        </CardMedia>

                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography textAlign="center">
                            Conocimientos en el uso de CSS3 y estilización de sitios HTML5 para mejorar su apariencia visual en el
                            desarrollo de sitios web
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                      <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                        elevation={4}
                      >
                        <CardMedia component="div">
                          <Typography variant='h3' textAlign="center" color="text.primary">JS</Typography>
                        </CardMedia>

                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography textAlign="center">
                            Conocimientos en el lenguaje JavaScript, utilizado para proporcionar movimiento e interacción en sitios
                            web.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Container>
          </Box>
        </main>

        <Footer />

      </ThemeProvider>
    </Slide>
  );
};

export default AboutMe;