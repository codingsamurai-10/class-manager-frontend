import { createMuiTheme } from '@material-ui/core'
import dark from './dark'
const light = createMuiTheme({})
const themes = {
  light,
  dark,
}

export default function getTheme(theme) {
  return themes[theme]
}
