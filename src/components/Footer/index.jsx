import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

export default function Footer() {
  return (
    <Box
      display="flex"
      component="footer"
      flexDirection="column"
      alignItems="center"
    >
      <Box marginTop={1} marginBottom={1}>
        <Typography variant="caption" color="textSecondary">
          &#169; Rafael Voigt Ferreira.
        </Typography>
      </Box>
      <Box marginTop={1} marginBottom={1}>
        <Typography variant="caption" color="textSecondary">
          Design: Cézar Augusto de Campos
        </Typography>
      </Box>
    </Box>
  );
}
