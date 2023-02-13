import { Select, SelectProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import IconArrow from '@/assets/icons/icon-arrow.svg';

const StyledDropdown = styled(Select)(({ theme }) => ({
  height: 43,
  fontSize: '1.25rem', // 20px
  lineHeight: '1.75rem', // 28px
  '.MuiSelect-select': {
    textTransform: 'capitalize',
    height: '100%',
    paddingLeft: theme.spacing(2),
  },
  '.MuiSelect-icon': {
    right: theme.spacing(2),
    width: 16,
    height: 8,
  },
}));

const Dropdown: React.FC<SelectProps> = ({ children, ...props }) => {
  return (
    <StyledDropdown variant="standard" IconComponent={IconArrow} {...props}>
      {children}
    </StyledDropdown>
  );
};

export default Dropdown;
