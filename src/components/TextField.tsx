import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  input: {
    fontSize: '1.25rem', // 20px
    lineHeight: '1.75rem', // 28px
    fontWeight: 400,
    fontFamily: 'inherit',
    padding: 0,
    paddingLeft: theme.spacing(2),
    height: 43,
  },
  '.MuiFormHelperText-root': {
    height: 9,
    fontSize: '0.625rem', // 10px
    lineHeight: '0.575rem', // 9.2px
    letterSpacing: '-0.008rem', // -0.13px
    marginLeft: theme.spacing(2),
    marginTop: 10,
  },
}));

const TextField: React.FC<TextFieldProps> = ({ children, ...props }) => {
  return (
    <StyledTextField variant="standard" {...props}>
      {children}
    </ StyledTextField>
  );
};

export default TextField;
