import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';


// Create a theme instance.
const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#01a781',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#222',
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export { responsiveTheme as theme };
