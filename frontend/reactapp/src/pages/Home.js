import React from 'react';
import { Container, Box } from '@mui/material';
import Navbar from '../components/Navbar';
import MainImage from '../components/MainImage';
import FeatureList from '../components/FeatureList';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import AppList from '../components/AppList';

const Home = () => {
  return (
    <>
      <Navbar />
      <MainImage />
      <Container sx={{ marginTop: 4 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },  // 🔹 スマホでは縦並び、PCでは横並び
            justifyContent: 'center',
            alignItems: 'flex-start',  // 🔹 上部を揃える
            gap: '20px',  // 🔹 機能一覧と夫婦アカウント情報の間隔
          }}
        >
          {/* 左側：機能リスト */}
          <FeatureList />

          {/* 右側：夫婦アカウント情報 */}
          <Sidebar />
        </Box>
      </Container>
      <AppList />
      <Footer />
    </>
  );
};

export default Home;
