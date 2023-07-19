import { Box, Button, Card, CardMedia, Collapse, Container, Grid, InputLabel, Link, Stack, ThemeProvider, Typography } from '@mui/material';
import Footer from './Footer';

import { Slide } from "react-awesome-reveal";

import { Document, Page } from 'react-pdf';
import { saveAs } from 'file-saver';


const Inicio = ({ themeGlobal }) => {

  const handleDownload = () => {
    const pdfBlob = '/public/CV_Luis_Gómez.pdf' // Genera o obtén el blob del documento PDF
    saveAs(pdfBlob, 'CV_Luis_Gómez.pdf');
  };



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

              <Grid container spacing={2} justify="center" alignItems="center">
                <Grid item xs={12} sm={6} md={4}>
                  <Typography

                    color="text.primary"
                    variant="h5"

                  >
                    Soy desarrollador web y me encanta todo lo relacionado con las tecnologías.
                  </Typography>
                  <Button onClick={handleDownload} variant="contained">Descargar CV</Button>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6} md={4}>
                        <Typography color="text.primary"
                          variant="h3" textAlign={'center'}>
                          <Link href='https://www.linkedin.com/in/luis-ad%C3%A1n-g%C3%B3mez-torres-8b9b7811b/' target="_blank">
                            <i className='bx bxl-linkedin-square'></i>
                          </Link>
                        </Typography>
                      </Grid>
                      <Grid item xs={12} sm={6} md={4}>
                        <Typography color="text.primary"
                          variant="h3" textAlign={'center'}>
                          <Link href='https://github.com/luis1290' target="_blank">
                            <i className='bx bxl-github' ></i>
                          </Link>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Card sx={{ height: '581px', width: '429px' }}>
                    <img
                      src="/public/fotor-ai-2023071715528-removebg-preview.png"
                      alt="Imagen Portafolio"
                      className="responsiveImage"
                    />
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

export default Inicio;