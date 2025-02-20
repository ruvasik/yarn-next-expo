import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';

interface ButtonPropsExtended extends ButtonProps {
  label: string;
}

const Button: React.FC<ButtonPropsExtended> = ({ label, ...props }) => {
  return <MuiButton {...props}>{label}</MuiButton>;
};

export default Button;
