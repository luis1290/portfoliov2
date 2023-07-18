import { Box, Container, InputLabel, Stack, ThemeProvider, Typography } from '@mui/material';

const Footer = () => {
  return (

    <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">

      <Typography color="text.secondary" variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
    </Box>

  );
};

export default Footer;