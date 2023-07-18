import { Box, Card, CardMedia, Collapse, Container, Grid, InputLabel, Stack, ThemeProvider, Typography } from '@mui/material';
import Footer from './Footer';


import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";


const Inicio = ({ themeGlobal }) => {



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
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                HEY, SOY LUIS
                GÓMEZ
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <Typography

                    color="text.primary"
                    variant="h5"
                  >
                    Soy desarrollador web y me encanta todo lo relacionado con las tecnologías.
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card  sx={{ height: '581px', width: '429px' }}>
                    <CardMedia
                      component="img"
                      image="/public/fotor-ai-2023071715528-removebg-preview.png"
                      alt="Imagen"

                    />
                  </Card>
                </Grid>

                {/* <Grid item xs={12} sm={6} md={4}>
                <img src="/public/fotor-ai-2023071715528-removebg-preview.png" alt="Imagen" />
              </Grid> */}
              </Grid>
            </Container>
          </Box>
        </main>
        <Footer />
      </ThemeProvider>
    </Slide>
  );
};

export default Inicio;