import { red } from '@material-ui/core/colors';
import { createTheme  } from '@material-ui/core/styles';

export const theme = createTheme ({
  palette: {
    type: 'light',
    primary: {
      main: '#61dafb',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    secondary: {
      main: '#b5ecfb',
      light: '#61dafb',
      dark: '#21a1c4',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#282c34',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: 0,
        // padding: '20px 10px',
        margin: '10px',
        backgroundColor: '#fff', // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: '5px',
      },
    },
  },
  typography: {
    useNextVariants: true,
    h1: {
      fontSize: 64,
      fontWeight: 700,
      fontFamily: 'D-DIN',
      '@media (max-width: 960px)': {
        fontSize: 32,
      },
    },
    h2: {
      fontSize: 24,
      fontWeight: 700,
      fontFamily: 'D-DIN'
    },
    h3: {
      fontSize: 20,
      lineHeight: 1.4,
      fontFamily: 'D-DIN',
      // fontWeight: '900',
    },
    h4: {
      fontSize: 18,
      fontFamily: 'D-DIN'
      // fontWeight: 700,
    },
    h5: {
      fontSize: 16,
      lineHeight: 1.4,
      fontFamily: 'D-DIN',
      fontWeight: '500',
    },
    h6: {
      fontSize: 14,
      // fontWeight: 600,
      fontFamily: 'D-DIN'
    }
  }
});