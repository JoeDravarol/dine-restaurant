import { Container as MuiContainer, ContainerProps } from '@mui/material';
import React from 'react';

import PatternDivide from '@/assets/patterns/pattern-divide.svg';

const Container: React.FC<ContainerProps> = ({ children, ...rest }) => {
  return (
    <MuiContainer sx={{ fontSize: 0 }} {...rest}>
      <PatternDivide />
      {children}
    </MuiContainer>
  );
};

export default Container;
