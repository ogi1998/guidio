import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000461',
        },
        secondary: {
            main: '#727CF5',
			light: '#A6ADFF85'
        },
        success: {
            main: '#0ACF97',
			contrastText: '#FFF'
        },
        danger: {
            main: '#FA5C7C',
        },
        dark: {
            main: '#6C757D',
        },
        light: {
            main: '#F9FAFD',
        },
		shadow: {
			main: 'rgba(0,0,0,0.15)'
		},
		gray: {
			dark: '#000000A6',
			main: '#B3B3B3'
		}
    },
});

export default theme;
