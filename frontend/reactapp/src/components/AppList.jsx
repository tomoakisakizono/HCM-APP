import React from 'react';
import { Box, Button, Grid } from '@mui/material';

const AppList = () => {
  return (
    <Box sx={{ textAlign: 'center', padding: '100px 0' }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="contained" sx={{ backgroundColor: '#b0bec5' }}>アプリ一覧</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{ backgroundColor: '#b0bec5' }}>1 未登録</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{ backgroundColor: '#b0bec5' }}>2 未登録</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" sx={{ backgroundColor: '#b0bec5' }}>3 未登録</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppList;
