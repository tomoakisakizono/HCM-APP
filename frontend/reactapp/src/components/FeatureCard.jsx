import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeatureCard = ({ title, description, icon }) => {
  return (
    <Card
      sx={{
        width: 300, // カードの幅を統一
        height: 220, // カードの高さを統一
        textAlign: 'center',
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center', // アイコンを中央揃え
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      <CardContent>
        <Typography variant="h6">{title}</Typography>

        {/* アイコンの追加 */}
        {icon && <FontAwesomeIcon icon={icon} size="2x" style={{ marginBottom: '10px' }} />}

        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
          {description}
        </Typography>
      </CardContent>
      <Button variant="contained" color="primary" sx={{ borderRadius: '5px', marginBottom: 2 }}>
        詳細
      </Button>
    </Card>
  );
};

export default FeatureCard;
