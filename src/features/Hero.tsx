import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import mobileHeroBgSm from '@/assets/homepage/hero-bg-mobile.jpg';
import mobileHeroBgMd from '@/assets/homepage/hero-bg-mobile@2x.jpg';
import Logo from '@/assets/icons/logo.svg';
import Button from '@/components/Button';

const StyledContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(3),
  marginTop: 232,
  marginBottom: 152,
  color: theme.palette.common.white,
  fill: 'white',
  textAlign: 'center',
}));

const StyledButton = styled(Button)(() => ({
  width: 245,
}));

const Hero: React.FC = () => {
  return (
    <Box height={748} component="header" position="relative" overflow="hidden">
      <picture>
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
          fontSize="2rem"
          lineHeight="2.5rem"
          letterSpacing="-0.025rem"
          mt={4.5}
          mb={2.625}
        >
          Exquisite dining <Box component="span" display="block">since 1989</Box>
        </Typography>

        <Typography variant="body2" mb={6.325}>
          Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of
          our farmhouse.
        </Typography>

        <StyledButton component={Link} href="/booking">Book a table</StyledButton>
      </StyledContainer>
    </Box>
  );
};

export default Hero;
