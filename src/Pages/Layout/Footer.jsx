import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { Link, useLocation } from 'react-router';

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isContact = location.pathname === '/contact';

  return (
    <Box
      sx={{
        width: { xs: '100vw', md: isHome || isContact ? '100vw' : '94vw' },
        mx: { xs: 0, md: isHome ? 0 : 'auto' },
        background: '#072F4A',
        color: 'white',
        py: 3,
        fontFamily: 'SVN-Gilroy',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 999,
      }}
    >
      {/* Main content */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          flexWrap: 'wrap',
          justifyContent: { xs: 'center', md: 'space-between' },
          gap: { xs: 2, md: 0 },
          maxWidth: '1200px',
          mx: 'auto',
          px: 2,
        }}
      >
        {/* Sections... (Safety, Legal, Menu) */}
        <Box sx={{ flex: '1 1 200px', textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Safety Center
          </Typography>
          <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
            <Link to="/community" style={{ textDecoration: 'none', color: 'white' }}>
              Community Guidelines
            </Link>
          </Stack>
        </Box>

        <Box sx={{ flex: '1 1 200px', textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Legal
          </Typography>
          <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
            <Link to="/privacy" style={{ textDecoration: 'none', color: 'white' }}>
              Terms & Conditions / Service
            </Link>
            <Link to="/privacy" style={{ textDecoration: 'none', color: 'white' }}>
              Privacy Policy
            </Link>
          </Stack>
        </Box>

        <Box sx={{ flex: '1 1 200px', textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Menu
          </Typography>
          <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Home
            </Link>
            <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
              About
            </Link>
            <Link to="/team" style={{ textDecoration: 'none', color: 'white' }}>
              Team Members
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'white' }}>
              Contact Us
            </Link>
          </Stack>
        </Box>

        {/* Existing App Buttons */}
        <Box sx={{ flex: '1 1 200px', textAlign: 'center' }}>
          {/* Large Bottom Left Text with Arrow */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              zIndex: 1,
              opacity: 0.15,
              mb:'10px',
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2rem', md: '4.5rem' },
                textAlign:'center',
                width:'100%',
                whiteSpace: 'nowrap',
              }}
            >
              Get the App
            </Typography>
          </Box>

          <Stack spacing={2} alignItems="center">
            <Box
              component="img"
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              sx={{ height: 57, cursor: 'pointer' }}
            />
            <Box
              component="img"
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              sx={{ height: 50, cursor: 'pointer' }}
            />
          </Stack>
        </Box>
      </Box>


      {/* Copyright */}
      <Box sx={{ textAlign: 'center', mt: 4, fontSize: '0.875rem', opacity: 0.7 }}>
        © {new Date().getFullYear()} Rocco Live. All rights reserved.
      </Box>
    </Box>
  );
}
