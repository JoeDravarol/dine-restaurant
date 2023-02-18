import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import desktopBgSm from '@/assets/homepage/ready-bg-desktop.jpg';
import desktopBgMd from '@/assets/homepage/ready-bg-desktop@2x.jpg';
import mobileBgSm from '@/assets/homepage/ready-bg-mobile.jpg';
import mobileBgMd from '@/assets/homepage/ready-bg-mobile@2x.jpg';
import tabletBgSm from '@/assets/homepage/ready-bg-tablet.jpg';
import tabletBgMd from '@/assets/homepage/ready-bg-tablet@2x.jpg';
import Button from '@/components/Button';

const StyledBox = styled(Box)(({ theme }) => ({
  paddingInline: theme.spacing(3),
  paddingTop: 84,
  paddingBottom: 80,
  textAlign: 'center',
  color: theme.palette.common.white,
  position: 'relative',
  overflow: 'hidden',

  [theme.breakpoints.up('tablet')]: {
    paddingInline: 66,
    paddingTop: 72,
    paddingBottom: 64,
  },
  [theme.breakpoints.up('desktop')]:  {
    textAlign: 'revert',
    display: 'grid',
    gridTemplateColumns: '1fr 615px 250px 245px 1fr',
    gridAutoFlow: 'dense',
    justifyContent: 'center',
    paddingBlock: 88,
    paddingInline: 165,

    a: {
      gridColumn: 4,
    },
  },
}));

const StyledImage = styled(Image)(() => ({
  width: '100%',
  height: '100%',
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
    <StyledBox component="section">
      <picture>
        <source srcSet={desktopBgMd.src} media="(min-width: 1600px)" />
        <source srcSet={desktopBgSm.src} media="(min-width: 1440px)" />
        <source srcSet={tabletBgMd.src} media="(min-width: 900px)" />
        <source srcSet={tabletBgSm.src} media="(min-width: 768px)" />
        <source srcSet={mobileBgMd.src} media="(min-width: 400px)" />
        <StyledImage src={mobileBgSm} alt="Plate of toast background image" />
      </picture>

      <Typography
        variant="h2"
        fontSize={{ mobile: '2rem', tablet: '3rem' }}
        lineHeight={{ mobile: '2.5rem', tablet: '3rem' }}
        letterSpacing={{ mobile: '-0.025rem', tablet: '-0.031rem' }}
        mb={{ mobile: 2.5, tablet: 3, desktop: 0 }}
      >
        Ready to make a reservation?
      </Typography>

      <Button sx={{ width: 245 }} component={Link} href="/booking">Book a table</Button>
    </StyledBox>
  );
};

export default CTA;
