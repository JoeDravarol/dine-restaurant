import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

import Logo from '@/assets/icons/logo.svg';

const StyledBox = styled(Box)(({ theme }) => ({
  height: 440,
  paddingInline: theme.spacing(3),
  color: theme.palette.common.white,
  fill: theme.palette.common.white,
  display: 'grid',
  alignContent: 'center',
  justifyItems: 'center',
  textAlign: 'center',
  textTransform: 'uppercase',

  [theme.breakpoints.up('tablet')]: {
    height: 328,
    paddingInline: theme.spacing(5),
    justifyItems: 'revert',
    textAlign: 'revert',
    gridTemplateColumns: '1fr 456px',
    gridGap: 129.58,
    maxWidth: 690,
    marginInline: 'auto',
  },
  [theme.breakpoints.up('desktop')]: {
    height: 240,
    paddingInline: 'revert',
    maxWidth: 1110,
    gridTemplateColumns: '1fr 814px',
    gridGap: 192,
  },
}));

const StyledTypography = styled(Typography)(() => ({
  fontSize: '0.875rem',
  lineHeight: '1.75rem',
  letterSpacing: '0.125rem',
  fontWeight: 400,
}));

const Footer: React.FC = () => {
  return (
    <Box component="footer" bgcolor="primary.main">
      <StyledBox>
        <Logo />

        <Stack
          component="section"
          direction={{ desktop: 'row' }}
          spacing={{ desktop: 15.5 }}
        >
          <StyledTypography
            mt={{ mobile: 5.25, tablet: 0 }}
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
        </Stack>
      </StyledBox>
    </Box>
  );
};

export default Footer;
