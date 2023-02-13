import { Button as MuiButton, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

interface Props extends ButtonProps {
  isDark?: boolean;
  component?: React.ElementType
}

interface StyledButtonProps {
  isDark?: boolean;
}

const StyledButton = styled(MuiButton)<StyledButtonProps>(({ isDark, theme }) => ({
  height: 64,
  color: isDark ? theme.palette.primary.main : theme.palette.common.white,
  paddingBlock: '25px 23px',
  border: '1px solid white',
  borderColor: isDark ? theme.palette.primary.main : theme.palette.common.white,
  borderRadius: 'revert',

  '&:hover, &.button--hover-active': {
    color: isDark ? theme.palette.common.white : theme.palette.primary.main,
    backgroundColor: isDark ? theme.palette.primary.main : theme.palette.common.white,
    borderColor: isDark ? theme.palette.primary.main : theme.palette.common.white,
  },
  '&:disabled': {
    color: isDark ? theme.palette.primary.main : theme.palette.common.white,
    border: '1px solid white',
    borderColor: isDark ? theme.palette.primary.main : theme.palette.common.white,
    opacity: 0.25,
  },
}));

const Button: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <StyledButton variant="outlined" {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
