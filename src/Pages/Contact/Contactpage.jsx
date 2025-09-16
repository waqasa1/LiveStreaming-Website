import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

export default function Contactpage() {
  return (
    <Box sx={{
      width: '100%',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'SVN-Gilroy',
    }}>
      <Container maxWidth="md" sx={{
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '1rem',
        p: { xs: 4, md: 8 },
        boxShadow: '0 8px 30px rgba(0,0,0,0.2)',
        backdropFilter: 'blur(10px)',
      }}>
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            fontWeight: 900,
            fontSize: { xs: '10vw', md: '4vw' },
            WebkitTextStroke: '1px black',
            textAlign: 'center',
            mb: 4
          }}
        >
          Contact Us
        </Typography>

        <Box sx={{ color: 'white', fontSize: '1.2rem', lineHeight: 1.8 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
            📧 Email
          </Typography>
          <Link href="mailto:info@loremvideo.com" underline="hover" sx={{ color: 'white', fontSize: '1.1rem' }}>
            info@loremvideo.com
          </Link>

          <Typography variant="h5" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
            🏢 New Agency Cooperation
          </Typography>
          <Typography>
            320 Serangoon Road<br/>
            #17-09/10/11 Centrium Square<br/>
            Singapore 218108
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 700, mt: 4, mb: 2 }}>
            🤝 Business cooperation
          </Typography>
          <Typography>
            For all business collaborations and agency opportunities,<br/>
            feel free to reach out to us via email.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
