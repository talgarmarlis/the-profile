import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#1b4965',
        },
        secondary: {
            main: '#ff686b',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1b4965',
        },
        secondary: {
            main: '#ff686b',
        },
    },
});