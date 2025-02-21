import React from 'react';
import { Button as RNButton } from 'react-native-paper';

// Кнопка для мобильных устройств с использованием react-native-paper
const Button: React.FC<{ children: React.ReactNode }> = ({ children, ...props }) => {
    return (
        <RNButton {...props}>
            {children}
        </RNButton>
    );
};

export default Button;
