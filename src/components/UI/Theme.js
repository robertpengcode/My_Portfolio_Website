import {createMuiTheme} from '@material-ui/core/styles'
import { black } from 'color-name';

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#189AB4'
    },
    secondary: {
      main: '#D4F1F4'
    },
    common: {
      navy: '#05445e'
    }
  },
  status: {
    danger: 'orange'
  },
  typography: {
    fontFamily: [
      "Open Sans Condensed",
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
  },
})

export default Theme