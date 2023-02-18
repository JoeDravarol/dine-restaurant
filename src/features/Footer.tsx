import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

import Logo from '@/assets/icons/logo.svg';

const StyledBox = styled(Box)(({ theme }) => ({
  height: 440,
  paddingInline: theme.spacing(3),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fill: theme.palette.common.white,
  display: 'grid',
  alignContent: 'center',
  justifyItems: 'center',
  textAlign: 'center',
  textTransform: 'uppercase',
}));

const StyledTypography = styled(Typography)(() => ({
  fontSize: '0.875rem',
  lineHeight: '1.75rem',
  letterSpacing: '0.125rem',
  fontWeight: 400,
}));

const Footer: React.FC = () => {
  return (
    <StyledBox>
      <Logo />

      <StyledTypography
        mt={{ mobile: 5.25 }}
        mb={{ mobile: 4 }}
      >
        Marthwaite, Sedbergh<br />
        Cumbria<br />
        +00 44 123 4567
      </StyledTypography>

      <Box>
        <StyledTypography variant="h5">
          Open times
        </StyledTypography>
        <StyledTypography>
          Mon - Fri: 09:00 am - 10:00 pm
        </StyledTypography>
        <StyledTypography>
          Sat - Sun: 09:00 am - 11:30 pm
        </StyledTypography>
      </Box>
    </StyledBox>
  );
};

export default Footer;
