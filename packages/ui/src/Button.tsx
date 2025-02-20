import { Platform } from 'react-native';

import { Button as RNButton } from 'react-native-paper';

import { Button as MUIButton } from '@mui/material';

// Кроссплатформенный компонент Button
const Button = ({ children, ...props }: { children: React.ReactNode }) => {
  if (Platform.OS === 'web') {
    return <MUIButton {...props}>{children}</MUIButton>;
  }

  return <RNButton {...props}>{children}</RNButton>;
};

export default Button;
