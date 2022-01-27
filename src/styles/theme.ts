export default {
  grid: {
    container: '120rem',
    gutter: '2rem'
  },
  font: {
    family:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weights: {
      light: 300,
      regular: 400,
      semiBold: 600,
      bold: 700
    },
    content: {
      xxsmall: '1rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      regular: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.4rem',
      xxxlarge: '2.8rem'
    },
    heading: {
      xxxsmall: '1.8rem',
      xxsmall: '2rem',
      xsmall: '2.2rem',
      small: '2.0rem',
      regular: '3.6rem',
      large: '4.0rem',
      xlarge: '4.8rem',
      xxlarge: '6rem',
      xxxlarge: '7.2rem',
      xxxxlarge: '9.6rem'
    }
  },
  border: {
    radius: {
      small: '0.2rem',
      regular: '0.4rem',
      large: '0.8rem'
    }
  },
  colors: {
    primary: '#2D72FA',
    black: '#000000',
    blackLight: '#202124',
    white: '#FFFFFF',

    gray600: 'rgba(13, 13, 13, 0.8)',
    gray700: 'rgba(0, 0, 0, 0.4)',
    gray800: 'rgba(13, 13, 13, 0.8);',

    positive: '#329DFF',
    negative: '#FF3E32',
    warning: '#FFC632'
  },
  spacings: {
    xxxsmall: '0.8rem',
    xxsmall: '1.2rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
    xxxlarge: '8.0rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out'
  },
  navbarHegiht: '9.5rem'
} as const
