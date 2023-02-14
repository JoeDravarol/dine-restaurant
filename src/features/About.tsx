import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import React from 'react';

import desktopEnjoyablePlaceSm from '@/assets/homepage/enjoyable-place-desktop.jpg';
import desktopEnjoyablePlaceMd from '@/assets/homepage/enjoyable-place-desktop@2x.jpg';
import mobileEnjoyablePlaceSm from '@/assets/homepage/enjoyable-place-mobile.jpg';
import mobileEnjoyablePlaceMd from '@/assets/homepage/enjoyable-place-mobile@2x.jpg';
import tabletEnjoyablePlaceSm from '@/assets/homepage/enjoyable-place-tablet.jpg';
import tabletEnjoyablePlaceMd from '@/assets/homepage/enjoyable-place-tablet@2x.jpg';
import desktopLocallySourceSm from '@/assets/homepage/locally-sourced-desktop.jpg';
import desktopLocallySourceMd from '@/assets/homepage/locally-sourced-desktop@2x.jpg';
import mobileLocallySourceSm from '@/assets/homepage/locally-sourced-mobile.jpg';
import mobileLocallySourceMd from '@/assets/homepage/locally-sourced-mobile@2x.jpg';
import tabletLocallySourceSm from '@/assets/homepage/locally-sourced-tablet.jpg';
import tabletLocallySourceMd from '@/assets/homepage/locally-sourced-tablet@2x.jpg';
import patternCurveTopLeft from '@/assets/patterns/pattern-curve-top-left.svg?url';
import patternCurveTopRight from '@/assets/patterns/pattern-curve-top-right.svg?url';
import patternLines from '@/assets/patterns/pattern-lines.svg?url';

import InfoCard from './InfoCard';

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('tablet')]: {
    position: 'relative',
    '&::before, &::after': {
      content: '""',
      width: 895, // default svg width
      height: 320, // default svg height
      backgroundImage: `url(${patternCurveTopRight})`,
      position: 'absolute',
      top: 196,
      left: -516, // svgWidth - (tabletSize / 2) + adjustment
      zIndex: 1,
    },
    '&::after': {
      backgroundImage: `url(${patternCurveTopLeft})`,
      top: 'revert',
      left: 'revert',
      right: -511, // svgWidth - (tabletSize / 2)
      bottom: -118, // Last InfoCard bottom margin
    },
    '.bg-pattern::after': {
      content: '""',
      width: 160, // default svg width
      height: 76, // default svg height
      backgroundImage: `url(${patternLines})`,
      position: 'absolute',
      top: 228,
      left: 471,
      zIndex: 5,
    },
    [theme.breakpoints.up('desktop')]: {
      width: 1110,
      marginInline: 'auto',

      '&::before': {
        left: -165,
        top: 320,
      },
      '&::after': {
        right: -165,
        bottom: 0,
      },
      '.bg-pattern picture': {
        marginBottom: -80,
      },
      '.bg-pattern::after': {
        left: 1064,
        top: 282,
      },
    },
  },
}));

const About: React.FC = () => {
  const enjoyablePlace = {
    title: 'Enjoyable place for all the family',
    description: `
      Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange 
      a tour of the farm before your meal.
    `,
    img: {
      src: mobileEnjoyablePlaceSm.src,
      alt: 'Country landscape',
      sources: [
        {
          srcSet: desktopEnjoyablePlaceMd.src,
          media: '(min-width: 1920px)',
        },
        {
          srcSet: desktopEnjoyablePlaceSm.src,
          media: '(min-width: 1440px)',
        },
        {
          srcSet: tabletEnjoyablePlaceMd.src,
          media: '(min-width: 900px)',
        },
        {
          srcSet: tabletEnjoyablePlaceSm.src,
          media: '(min-width: 768px)',
        },
        {
          srcSet: mobileEnjoyablePlaceMd.src,
          media: '(min-width: 400px)',
        },
      ],
    },
  };
  const locallySourcedFood = {
    title: 'The most locally sourced food',
    description: `
      All our ingredients come directly from our farm or local fishery. So you can be  sure that you're eating
      the freshest, most sustainable food.
    `,
    img: {
      src: mobileLocallySourceSm.src,
      alt: 'Country landscape',
      sources: [
        {
          srcSet: desktopLocallySourceMd.src,
          media: '(min-width: 1920px)',
        },
        {
          srcSet: desktopLocallySourceSm.src,
          media: '(min-width: 1440px)',
        },
        {
          srcSet: tabletLocallySourceMd.src,
          media: '(min-width: 900px)',
        },
        {
          srcSet: tabletLocallySourceSm.src,
          media: '(min-width: 768px)',
        },
        {
          srcSet: mobileLocallySourceMd.src,
          media: '(min-width: 400px)',
        },
      ],
    },
  };

  return (
    <StyledBox>
      <InfoCard
        sx={{
          marginTop: { mobile: '-72px', tablet: '-96px', desktop: '-70px' },
          marginBottom: { desktop: '121px' },
        }}
        {...enjoyablePlace}
      />

      <InfoCard className="bg-pattern" {...locallySourcedFood} />
    </StyledBox>
  );
};

export default About;
