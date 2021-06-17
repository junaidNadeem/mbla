import { createMuiTheme, Theme } from '@material-ui/core/styles'

export const getTheme = (): Theme => {
  const theme = createMuiTheme({})

  theme.typography.h1 = {
    fontFamily: 'MBLAFonts',
    fontSize: '3.75rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.375rem'
    }
  }
  theme.typography.h2 = {
    fontFamily: 'MBLAFonts',
    fontSize: '3.125rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.75rem'
    }
  }
  theme.typography.h3 = {
    fontFamily: 'MBLAFonts',
    fontSize: '2.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.563rem'
    }
  }
  theme.typography.h4 = {
    fontFamily: 'MBLAFonts',
    fontSize: '1.75rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.938rem'
    }
  }
  theme.typography.h5 = {
    fontFamily: 'Matahari',
    fontSize: '1.375rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.125rem'
    }
  }
  theme.typography.h6 = {
    fontFamily: 'Matahari',
    fontSize: '1.125rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    }
  }
  theme.typography.body1 = {
    fontFamily: 'MBLAFonts',
    fontSize: '1.25rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem'
    }
  }

  theme.typography.subtitle1 = {
    fontFamily: 'MBLAFonts',
    fontSize: '34px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '25px'
    }
  }

  return theme
}
