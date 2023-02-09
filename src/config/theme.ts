import { createTheme } from '@mui/material/styles';
import { League_Spartan } from '@next/font/google';

export const leagueSpartan = League_Spartan({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

declare module '@mui/material/styles' {
  interface Palette {
    neutral: {
      mirage: string;
      ebonyClay: string;
      shuttleGray: string;
    }
  }

  interface PaletteOptions {
    neutral: {
      mirage: string;
      ebonyClay: string;
      shuttleGray: string;
    }
  }

  interface BreakpointOverrides {
    mobile: true;
    tablet: true;
    desktop: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(0, 0%, 7%)', // Cod Gray
      contrastText: '#FFF',
    },
    secondary: {
      main: 'hsl(27, 22%, 51%)', // Beaver
      contrastText: '#FFF',
    },
    neutral: {
      mirage: 'hsl(234, 30%, 13%)',
      ebonyClay: 'hsl(218, 21%, 18%)',
      shuttleGray: 'hsl(217, 14%, 42%)',
    },
  },
  typography: {
    fontFamily: leagueSpartan.style.fontFamily,
    h1: {
      fontSize: '5rem', // 80px
      lineHeight: '5rem', // 80px
      letterSpacing: '-0.063rem', // -1px
      fontWeight: 300,
    },
    h2: {
      fontSize: '3rem', // 48px
      lineHeight: '3rem', // 48px
      letterSpacing: '-0.031rem', // -0.5px
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.25rem', // 20px
      lineHeight: '1.5rem', // 24px,
      letterSpacing: '-0.016rem', // -0.25px
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.063rem', // 17px
      lineHeight: '1.75rem', // 28px
      letterSpacing: '0.156rem', // 2.5px
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.25rem', // 20px
      lineHeight: '1.875rem', // 30px
      fontWeight: 400,
    },
    body2: {
      fontSize: '1rem', // 16px
      lineHeight: '1.625rem', // 26px
      fontWeight: 400,
    },
  },
  breakpoints: {
    keys: [
      'xs',
      'sm',
      'md',
      'lg',
      'xl',
      'mobile',
      'tablet',
      'desktop',
    ],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      mobile: 0,
      tablet: 768,
      desktop: 1439,
    },
  },
});

export default theme;
