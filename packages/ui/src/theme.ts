import { Platform } from 'react-native';

// Для Expo (React Native)
import { DefaultTheme as PaperDefaultTheme, Provider as PaperProvider } from 'react-native-paper';

// Для веба (Next.js)
import { createTheme } from '@mui/material/styles';

// Кроссплатформенная тема
const theme =
  Platform.OS === 'web'
    ? createTheme({
        palette: {
          primary: {
            main: '#007bff',
          },
          secondary: {
            main: '#ff4081',
          },
        },
        typography: {
          fontFamily: 'Roboto, sans-serif',
        },
      })
    : PaperDefaultTheme; // Стандартная тема для React Native

export default theme;
