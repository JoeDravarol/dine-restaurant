import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import tabletBeefMd from '@/assets/homepage/beef-desktop-tablet@2x.jpg';
import mobileBeefSm from '@/assets/homepage/beef-mobile.jpg';
import mobileBeefMd from '@/assets/homepage/beef-mobile@2x.jpg';
import tabletChocolateMd from '@/assets/homepage/chocolate-desktop-tablet@2x.jpg';
import mobileChocolateSm from '@/assets/homepage/chocolate-mobile.jpg';
import mobileChocolateMd from '@/assets/homepage/chocolate-mobile@2x.jpg';
import tabletSalmonMd from '@/assets/homepage/salmon-desktop-tablet@2x.jpg';
import mobileSalmonSm from '@/assets/homepage/salmon-mobile.jpg';
import mobileSalmonMd from '@/assets/homepage/salmon-mobile@2x.jpg';
import Container from '@/components/Container';

import FoodCard from './FoodCard';

const StyledBleedContainer = styled(Container)(({ theme }) => ({
  paddingTop: 72,
  paddingBottom: 102,
  paddingInline: theme.spacing(3),
  backgroundColor: theme.palette.primary.main,
  textAlign: 'center',
  color: theme.palette.common.white,
  '&.MuiContainer-root': {
    maxWidth: '100%',
  },

  [theme.breakpoints.up('tablet')]: {
    paddingInline: 97,
    paddingBlock: 96,
  },
}));

const StyledContainer = styled(Box)(({ theme }) => ({
  maxWidth: 327,
  marginInline: 'auto',
  [theme.breakpoints.up('tablet')]: {
    maxWidth: 573,
  },
}));

const MenuHighlights: React.FC = () => {
  const searedSalmon = {
    title: 'Seared salmon fillet',
    description: (<>
      Our locally sourced salmon served <Box component="span" display={{ mobile: 'block', tablet: 'revert' }}>
      with a refreshing buckwheat summer salad.
      </Box>
    </>),
    img: {
      src: mobileSalmonSm.src,
      sources: [
        {
          srcSet: tabletSalmonMd.src,
          media: '(min-width: 768px)',
        },
        {
          srcSet: mobileSalmonMd.src,
          media: '(min-width: 400px)',
        },
      ],
    },
  };
  const filetMignon = {
    title: 'Rosemary filet mignon',
    description: (<>
      Our prime beef served to your taste
      <Box component="span" display={{ mobile: 'block', tablet: 'revert' }}>
        with a delicious choice of seasonal
        <Box component="span" display={{ mobile: 'block', tablet: 'revert' }}> sides.</Box>
      </Box>
    </>),
    img: {
      src: mobileBeefSm.src,
      sources: [
        {
          srcSet: tabletBeefMd.src,
          media: '(min-width: 768px)',
        },
        {
          srcSet: mobileBeefMd.src,
          media: '(min-width: 400px)',
        },
      ],
    },
  };
  const chocolateMousse = {
    title: 'Summer fruit chocolate mousse',
    description: (<>
      Creamy mousse combined with
      <Box component="span" display={{ mobile: 'block', tablet: 'revert' }}>
        summer fruits and dark chocolate shavings.
      </Box>
    </>),
    img: {
      src: mobileChocolateSm.src,
      sources: [
        {
          srcSet: tabletChocolateMd.src,
          media: '(min-width: 768px)',
        },
        {
          srcSet: mobileChocolateMd.src,
          media: '(min-width: 400px)',
        },
      ],
    },
  };

  return (
    <StyledBleedContainer component="section" disableGutters>
      <StyledContainer>
        <Box
          mt={{ mobile: 4.5, tablet: 4.875 }}
          mb={{ mobile: 10.625, tablet: 6.75 }}
          maxWidth={{ tablet: 445 }}
          mx={{ tablet: 'auto' }}
        >
          <Typography
            variant="h2"
            fontSize={{ mobile: '2rem', tablet: '3rem' }}
            lineHeight={{ mobile: '2.5rem', tablet: '3rem' }}
            letterSpacing={{ mobile: '-0.025rem', tablet: '-0.031rem' }}
            mb={{ mobile: 1.625, tablet: 3.375 }}
          >
            A few highlights from our menu
          </Typography>
          <Typography
            variant="body2"
            fontSize={{ tablet: '1.25rem' }}
            lineHeight={{ tablet: '1.875rem' }}
          >
            We cater for all dietary requirements, but here&apos;s a glimpse at some of our diner&apos;s favourites. Our
            menu is revamped every season.
          </Typography>
        </Box>

        <FoodCard {...searedSalmon}>
          <Typography variant="body2">{searedSalmon.description}</Typography>
        </FoodCard>

        <FoodCard {...filetMignon}>
          <Typography variant="body2">{filetMignon.description}</Typography>
        </FoodCard>

        <FoodCard {...chocolateMousse}>
          <Typography variant="body2">{chocolateMousse.description}</Typography>
        </FoodCard>
      </StyledContainer>
    </StyledBleedContainer>
  );
};

export default MenuHighlights;
