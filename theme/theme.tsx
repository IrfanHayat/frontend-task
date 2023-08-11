import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
    palette: {
        background: {
            default: '#0D2436',
        },
        text: {
            primary: '#FFFFFF',
        },
    },
});

export default theme;
