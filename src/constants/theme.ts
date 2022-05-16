import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: '#28293e',
    },
    secondary: {
      main: '#3754fb',
    },
    error: {
      main: red.A400,
    },
  },
})
