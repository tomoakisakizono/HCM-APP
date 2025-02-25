import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1976d2', // ヘッダーと同じ色
        padding: '20px 0',
        textAlign: 'center',
        width: '100%',
        color: 'white',
      }}
    >
      <Container>
        <Typography variant="body2">
          ©Dream Leaf, All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
