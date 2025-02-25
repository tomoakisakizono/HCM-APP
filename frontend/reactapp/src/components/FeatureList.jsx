import React from 'react';
import { Grid, Container } from '@mui/material';
import FeatureCard from './FeatureCard';
import { faEnvelope, faCalendar, faList, faFileInvoiceDollar, faImages, faClipboardList } from '@fortawesome/free-solid-svg-icons';

const features = [
  { title: 'メッセージ管理', icon: faEnvelope, description: 'パートナーと簡単にメッセージをやり取り。' },
  { title: 'カレンダー機能', icon: faCalendar, description: '共有カレンダーで予定を一緒に管理。' },
  { title: '買い物リスト', icon: faList, description: '必要なものを一緒にリストアップ。' },
  { title: '家計簿', icon: faFileInvoiceDollar, description: 'お金の支出を一緒に管理。' },
  { title: '思い出フォルダ', icon: faImages, description: '嬉しい・楽しいを未来につなげよう！' },
  { title: 'しないとリスト', icon: faClipboardList, description: 'しないといけないことを一緒に管理。' },
];

const FeatureList = () => {
  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: '1100px', margin: 'auto' }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <FeatureCard title={feature.title} description={feature.description} icon={feature.icon} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeatureList;
