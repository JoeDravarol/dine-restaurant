import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import mobileHeroBgSm from '@/assets/homepage/hero-bg-mobile.jpg';
import mobileHeroBgMd from '@/assets/homepage/hero-bg-mobile@2x.jpg';
import tabletHeroBgSm from '@/assets/homepage/hero-bg-tablet.jpg';
import tabletHeroBgMd from '@/assets/homepage/hero-bg-tablet@2x.jpg';
import Logo from '@/assets/icons/logo.svg';
import Button from '@/components/Button';

const StyledContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(3),
  marginTop: 232,
  marginBottom: 152,
  color: theme.palette.common.white,
  fill: 'white',
  textAlign: 'center',

  [theme.breakpoints.up('tablet')]: {
    marginTop: 'clamp(374px, 40%, 600px)',
    maxWidth: 689,
    marginInline: 'auto',
  },
}));

const StyledButton = styled(Button)(() => ({
  width: 245,
}));

const Hero: React.FC = () => {
  return (
    <Box
      height={{ mobile: 748, tablet: 992 }}
      component="header"
      bgcolor="primary.main"
      position="relative"
      overflow="hidden"
      zIndex={1}
    >
      <picture>
        <source srcSet={tabletHeroBgMd.src} media="(min-width: 900px)" />
        <source srcSet={tabletHeroBgSm.src} media="(min-width: 768px)" />
        <source srcSet={mobileHeroBgMd.src} media="(min-width: 400px)" />
        <Image
          style={{
            pointerEvents: 'none',
            position: 'absolute',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
            zIndex: -1,
          }}
          src={mobileHeroBgSm}
          alt="test"
        />
      </picture>

      <StyledContainer component="section">
        <Typography variant="h1" title="Dine" fontSize="0" lineHeight="0">
          <Logo title="Dine" />
        </Typography>

        <Typography
          variant="h1"
          component="h2"
          fontSize={{ mobile: '2rem', tablet: '3rem' }}
          lineHeight={{ mobile: '2.5rem', tablet: '4rem' }}
          letterSpacing={{ mobile: '-0.025rem', tablet: '-0.038rem' }}
          mt={{ mobile: 4.5, tablet: 4.75 }}
          mb={{ mobile: 2.625, tablet: 2.5 }}
        >
          Exquisite dining <Box component="span" display="block">since 1989</Box>
        </Typography>

        <Typography
          sx={{ marginInline: { tablet: 'auto' } }}
          variant="body2"
          maxWidth={{ tablet: 573 }}
          fontSize={{ tablet: '1.25rem' }}
          lineHeight={{ tablet: '1.875rem' }}
          mb={{ mobile: 6.325, tablet: 6.5 }}
        >
          Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of
          our farmhouse.
        </Typography>

        <StyledButton component={Link} href="/booking">Book a table</StyledButton>
      </StyledContainer>
    </Box>
  );
};

export default Hero;
