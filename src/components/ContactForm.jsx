import { Box, Button, Card, Container, Grid, Link, TextField, ThemeProvider, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Slide } from 'react-awesome-reveal';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';






const ContactForm = ({ themeGlobal }) => {

  const navigate = useNavigate()

 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const emailSubject = encodeURIComponent('Nuevo mensaje de contacto');
    const emailBody = encodeURIComponent(
      `Nombre: ${formData.name}\nCorreo electrónico: ${formData.email}\nMensaje: ${formData.message}`
    );

    const emailUrl = `mailto:lgomez1290@gmail.com?subject=${emailSubject}&body=${emailBody}`;
    window.location.href = emailUrl;

    // Reiniciar los campos después del envío
    setFormData({ name: '', email: '', message: '' });
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
            <Container maxWidth="xl">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                contáctame
              </Typography>
              <Grid container sx={{ justifyContent: 'center' }} spacing={4} justify="center" alignItems="center">
                <Grid item xs={12} sm={6} md={4}>
                  <address className="contact__info-data">
                    <Box className="contact__info-item">
                      <Typography color="text.primary" textAlign={'center'} >
                        <i className='bx bxl-whatsapp'></i>
                      </Typography>

                      <Typography color="text.primary" textAlign={'center'} className="contact__info-number">
                        <Link href="https://wa.me/+50686380782?text=Tu%20Mensaje%20De%20Texto" target="_blank">
                          Enviar a WhatsApp</Link>
                      </Typography>
                    </Box>
                    <Box className="contact__info-item">
                      <Typography color="text.primary" textAlign={'center'} >
                        <i className='bx bx-envelope'></i>
                      </Typography>

                      <Typography color="text.primary" textAlign={'center'} className="contact__info-mail">
                        <Link id="mail" href="mailto:lgomez1290@gmail.com">
                          lgomez1290@gmail.com</Link>
                      </Typography>
                    </Box>
                    <Box className="contact__info-item">
                      <Typography color="text.primary" textAlign={'center'} >
                        <i className='bx bxs-map'></i>
                      </Typography>

                      <Typography color="text.primary" textAlign={'center'} className="contact__info-map">
                        Costa Rica
                      </Typography>
                    </Box>
                  </address>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <Box >
                    <Card elevation={24} sx={{ padding: '20px' }}>
                      <Typography

                        color="text.primary"
                        variant="h5"
                        textAlign={'center'}
                      >
                        Enviar Mensaje
                      </Typography>
                      <form className="root" onSubmit={handleSubmit}>
                        <TextField
                          required
                          id="name"
                          name="name"
                          label="Nombre"
                          value={formData.name}
                          onChange={handleChange}
                        />
                        <TextField
                          required
                          id="email"
                          name="email"
                          label="Correo electrónico"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <TextField
                          required
                          id="message"
                          name="message"
                          label="Mensaje"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                        />
                        <Button
                          className="button"
                          variant="contained"
                          color="primary"
                          type="submit"
                        >
                          Enviar
                        </Button>
                      </form>
                    </Card>


                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Footer />
        </main>
      </ThemeProvider>
    </Slide>
  );
};

export default ContactForm;