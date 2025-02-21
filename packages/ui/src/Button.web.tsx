// components/Button.web.tsx (для веба)
import React from 'react';
import { Button as MUIButton, ButtonProps } from '@mui/material';

// Кнопка для веба с использованием MUI
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <MUIButton {...props}>
            {children}
        </MUIButton>
    );
};

export default Button;
