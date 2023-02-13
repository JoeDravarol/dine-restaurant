import { TextField, IconButton, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import IconMinus from '@/assets/icons/icon-minus.svg';
import IconPlus from '@/assets/icons/icon-plus.svg';

const StyledTextField = styled(TextField)(({ theme }) => ({
  height: 43,
  input: {
    fontSize: '1.25rem', // 20px
    lineHeight: '1.5rem', // 24px
    fontWeight: 700,
    fontFamily: 'inherit',
    textAlign: 'center',
    padding: 0,
    height: 43,
  },
}));


type Props  = TextFieldProps & {
  handlePlusClick?: React.MouseEventHandler<HTMLButtonElement>;
  handleMinusClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const NumberTextField: React.FC<Props> = ({
  handlePlusClick,
  handleMinusClick,
  disabled,
  ...props
}) => {
  return (
    <StyledTextField
      variant="standard"
      type="text"
      InputProps={{
        startAdornment: (
          <IconButton
            sx={{ paddingInline: 3.5, borderRadius: 'revert', height: 43 }}
            onClick={handleMinusClick}
            disabled={disabled}
          >
            <IconMinus />
          </IconButton>
        ),
        endAdornment: (
          <IconButton
            sx={{ paddingInline: 3.5, borderRadius: 'revert', height: 43 }}
            onClick={handlePlusClick}
            disabled={disabled}
          >
            <IconPlus />
          </IconButton>
        ),
        readOnly: true,
      }}
      disabled={disabled}
      {...props}
    />
  );
};

export default NumberTextField;
