import { Container as MuiContainer, ContainerProps } from '@mui/material';
import React from 'react';

import PatternDivide from '@/assets/patterns/pattern-divide.svg';

type Props = ContainerProps & {
  component?: React.ElementType
}

const Container: React.FC<Props> = ({ children, ...rest }) => {
  return (
    <MuiContainer sx={{ fontSize: 0 }} {...rest}>
      <PatternDivide />
      {children}
    </MuiContainer>
  );
};

export default Container;
