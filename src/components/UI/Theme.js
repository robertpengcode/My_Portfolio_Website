import {createMuiTheme} from '@material-ui/core/styles'

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#cfd8dc'
    },
    secondary: {
      main: '#006064'
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