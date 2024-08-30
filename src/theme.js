// src/theme.js
import { createTheme } from '@mui/material/styles';
import { responsiveFontSizes } from '@mui/material/styles';

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#229799',
    },
    secondary: {
      main: '#48CFCB',
    },
    text: {
        primary: '#424242'
    },
    background: {
        main: '#F5F5F5'
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '3rem', // Custom font size for h1
    },
    // You can customize other typography variants as well
    h2: {
      fontSize: '2.5rem',
    },
    h3: {
        fontWeight: 'bold',
        paddingBottom: '1rem',
    },
    h4: {
        fontSize: '1.8rem',
    },
    h5: {
      padding: '0.8rem',
    }
    
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem',
          margin: '0.5rem'
        },
      },
    },
  },
  // Add more customizations as needed
});


const responsiveTheme = responsiveFontSizes(theme);


export default responsiveTheme;
