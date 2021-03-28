import { createMuiTheme } from '@material-ui/core/styles'
import { red, deepPurple, deepOrange } from '@material-ui/core/colors'


// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: deepPurple,
    secondary: deepOrange,
    titleBar: {
      main: '#555555',
      contrastText: '#ffffff',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
