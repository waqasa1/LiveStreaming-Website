import React from 'react';
import AboutHero from './AboutHero';
import AboutDetail from './AboutDetail'
import { Box } from '@mui/material';

export default function About() {
  return (
    <Box >
      <AboutHero />
      <AboutDetail />
    </Box>
  );
}
