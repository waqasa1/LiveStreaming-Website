import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8F29D0',  // your purple
    },
    secondary: {
      main: '#0AEBEE',  // your aqua blue
    },
    background: {
      default: '#FFFFFF',  // globally white
      paper: '#FFFFFF',
    },
    text: {
      primary: '#000000',  // globally black
      secondary: '#1F1692', // optional dark accent
    },
  },
  typography: {
    fontFamily: 'SVN-Gilroy, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
          textTransform: 'none',
          fontWeight: 600,
          color: '#fff',
          background: 'linear-gradient(to right, #8F29D0, #6467DA, #0AEBEE)',
        },
      },
    },
  },
});

export default theme;
