import dark from './dark'
import normal from './normal'

const themes = {
  normal,
  dark,
}

export default function getTheme(theme) {
  return themes[theme]
}
