import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          ホームコミュニケーション
        </Typography>
        <Button color="inherit">ユーザー登録</Button>
        <Button color="inherit">ログイン</Button>
        <Button color="inherit">プロフィール修正</Button>
        <Button color="inherit">夫婦アカウント管理</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
