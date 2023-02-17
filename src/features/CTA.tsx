import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React from 'react';

import mobileBgSm from '@/assets/homepage/ready-bg-mobile.jpg';
import mobileBgMd from '@/assets/homepage/ready-bg-mobile@2x.jpg';
import Button from '@/components/Button';

const StyledImage = styled(Image)(() => ({
  width: '100%',
  pointerEvents: 'none',
  position: 'absolute',
  objectPosition: 'center',
  objectFit: 'cover',
  top: 0,
  left: 0,
  zIndex: -1,
}));

const CTA: React.FC = () => {
  return (
    <Box
      px={{ mobile: 3 }}
      pt={{ mobile: 10.5 }}
      pb={{ mobile: 10 }}
      textAlign={{ mobile: 'center' }}
      color="common.white"
      position="relative"
    >
      <picture>
        <source srcSet={mobileBgMd.src} media="(min-width: 400px)" />
        <StyledImage src={mobileBgSm} alt="Plate of toast background image" />
      </picture>

      <Typography
        variant="h2"
        fontSize={{ mobile: '2rem' }}
        lineHeight={{ mobile: '2.5rem' }}
        letterSpacing={{ mobile: '-0.025rem' }}
        mb={{ mobile: 2.5 }}
      >
        Ready to make a reservations?
      </Typography>

      <Button sx={{ width: 245 }}>Book a table</Button>
    </Box>
  );
};

export default CTA;
