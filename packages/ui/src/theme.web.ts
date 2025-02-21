
import { createTheme } from '@mui/material/styles';

// Кроссплатформенная тема
const theme = createTheme({
        palette: {
            primary: {
                main: '#007bff', // Цвет для веба
            },
            secondary: {
                main: '#ff4081', // Цвет для веба
            },
        },
        typography: {
            fontFamily: 'Roboto, sans-serif',
        },
    });

export default theme;
