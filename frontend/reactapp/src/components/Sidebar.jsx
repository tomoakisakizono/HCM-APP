import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const Sidebar = () => {
  return (
    <Paper
      sx={{
        padding: 3,
        backgroundColor: '#e3f2fd',
        borderRadius: '10px',
        textAlign: 'center',
        width: 320, // 固定幅に設定
        minHeight: '100%',  // 🔹 高さを機能一覧と揃える
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // 🔹 上揃え
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2 }}>夫婦アカウント情報</Typography>
      <Box
        component="img"
        src="/image/pair_image.png"
        alt="Couple"
        sx={{
          width: '100%',
          height: 'auto',
          borderRadius: '10px',
          marginBottom: 2,
        }}
      />
      <Typography variant="body1">アカウント名: 〇〇 & 〇〇</Typography>
      <Typography variant="body2">メール: example@example.com</Typography>
      <Typography variant="body2">ステータス: アクティブ</Typography>
    </Paper>
  );
};

export default Sidebar;
