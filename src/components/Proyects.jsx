import { Box, InputLabel, ThemeProvider } from '@mui/material';

import { Slide } from "react-awesome-reveal";

const Proyects = ({ themeGlobal }) => {
  return (
    <Slide duration={4000}>
      <ThemeProvider theme={themeGlobal}>
        <main>
          <Box sx={{
            bgcolor: 'background.paper', pt: 8,
            pb: 6,
          }} >
            <InputLabel id="demo-simple-select-label">Proyectos</InputLabel>
          </Box>
        </main>
      </ThemeProvider>
    </Slide>
  );
};

export default Proyects;