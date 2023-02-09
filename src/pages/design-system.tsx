import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import Logo from '@/assets/icons/logo.svg';
import PatternCurveTopRight from '@/assets/patterns/pattern-curve-top-left.svg';
import PatternLines from '@/assets/patterns/pattern-lines.svg';

const HeaderContainer = styled(Box)(({ theme }) => ({
  width: 826,
  height: 200,
  marginInline: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const DesignSystem: React.FC = () => {
  return (
    <Box sx={{ marginInline: 'auto'}} maxWidth={1024} position="relative">
      <HeaderContainer component="header">
        <Logo style={{ width: '82.4px', height: 32 }} viewBox="0 0 103 40" />
        <Typography variant="h4" component="h1" textTransform="uppercase">web design system</Typography>

        <Box position="absolute" top={0} right={0}>
          <PatternCurveTopRight style={{ width: 490, height: 200 }} />
        </Box>
        <Box position="absolute" top={0} right={0} mt="162px">
          <PatternLines />
        </Box>
      </HeaderContainer>
    </Box>
  );
};

export default DesignSystem;
