import { Box, Button, TextField, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';






const ContactForm = ({ themeGlobal }) => {

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
    <ThemeProvider theme={themeGlobal}>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
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
        </Box>
      </main>
    </ThemeProvider>
  );
};

export default ContactForm;