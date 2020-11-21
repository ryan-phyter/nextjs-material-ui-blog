import { createMuiTheme, ThemeOptions } from '@material-ui/core'

export const paletteColorsDark = {
  primary: '#0f4c75',
  secondary: '#3282b8',
  error: '#E44C65',
  background: '#1b262c',
  text: '#bbe1fa',
}

export const paletteColorsLight = {
  primary: '#6886c5',
  secondary: '#ffe0ac',
  error: '#E44C65',
  background: '#f9f9f9',
  text: '#050505',
}

const options = (dark: boolean): ThemeOptions => {
  const paletteColors = dark ? paletteColorsDark : paletteColorsLight
  return {
    palette: {
      type: dark ? 'dark' : 'light',
      primary: {
        main: paletteColors.primary,
      },
      secondary: {
        main: paletteColors.secondary,
      },
      error: {
        main: paletteColors.error,
      },
      background: {
        default: paletteColors.background,
      },
      text: {
        primary: paletteColors.text,
      },
    },
    typography: {
      fontFamily: 'Roboto',
      h1: {
        fontFamily: 'Roboto Slab',
        fontWeight: 300,
        fontSize: '96px',
        lineHeight: '127px',
        letterSpacing: '-1.5px',
      },
      h2: { fontFamily: 'Roboto Slab', fontWeight: 300, fontSize: '60px', lineHeight: '79px', letterSpacing: '-0.5px' },
      h3: { fontFamily: 'Roboto Slab', fontSize: '48px', lineHeight: '63px' },
      h4: { fontFamily: 'Roboto Slab', fontSize: '34px', lineHeight: '45px', letterSpacing: '0.25px' },
      h5: { fontFamily: 'Roboto', fontSize: '24px', lineHeight: '32px' },
      h6: { fontFamily: 'Roboto', fontWeight: 500, fontSize: '20px', lineHeight: '26px', letterSpacing: '0.15px' },
      subtitle1: { fontFamily: 'Roboto', fontSize: '16px', lineHeight: '19px', letterSpacing: '0.15px' },
      subtitle2: {
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '16.41px',
        letterSpacing: '0.1px',
      },
      body1: { fontFamily: 'Roboto', fontSize: '18px', lineHeight: '200%', letterSpacing: '0.5px' },
      body2: { fontFamily: 'Roboto', fontSize: '14px', lineHeight: '16px', letterSpacing: '0.25px' },
      button: { fontFamily: 'Roboto', fontWeight: 500, fontSize: '14px', letterSpacing: '1.25px' },
      caption: { fontFamily: 'Roboto', fontSize: '12px', lineHeight: '14px', letterSpacing: '0.4px' },
      overline: { fontFamily: 'Roboto', fontSize: '10px', lineHeight: '12px', letterSpacing: '1.5px' },
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: {
            height: '100%',
            padding: 0,
            margin: 0,
          },
          body: {
            height: '100%',
            padding: 0,
            margin: 0,
          },
          a: {
            textDecoration: 'none',
            fontWeight: 'bold',
            color: paletteColors.text,
          },
        },
      },
    },
  }
}

export const darkTheme = createMuiTheme(options(true))
export const lightTheme = createMuiTheme(options(false))

export default darkTheme
