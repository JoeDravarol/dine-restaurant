import Box from '@mui/material/Box';
import React from 'react';

import mobileEnjoyablePlaceSm from '@/assets/homepage/enjoyable-place-mobile.jpg';
import mobileEnjoyablePlaceMd from '@/assets/homepage/enjoyable-place-mobile@2x.jpg';
import mobileLocallySourceSm from '@/assets/homepage/locally-sourced-mobile.jpg';
import mobileLocallySourceMd from '@/assets/homepage/locally-sourced-mobile@2x.jpg';

import InfoCard from './InfoCard';


const About: React.FC = () => {
  return (
    <Box>
      <InfoCard
        sx={{ marginTop: '-72px' }}
        title="Enjoyable place for all the family"
        description={`
            Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange 
            a tour of the farm before your meal.
          `}
        img={{
          src: mobileEnjoyablePlaceSm.src,
          alt: 'Country landscape',
          sources: [{
            srcSet: mobileEnjoyablePlaceMd.src,
            media: '(min-width: 400px)',
          }],
        }}
      />

      <InfoCard
        title="The most locally sourced food"
        description={`
            All our ingredients come directly from our farm or local fishery. So you can be  sure that you're eating
            the freshest, most sustainable food.
          `}
        img={{
          src: mobileLocallySourceSm.src,
          alt: 'Country landscape',
          sources: [{
            srcSet: mobileLocallySourceMd.src,
            media: '(min-width: 400px)',
          }],
        }}
      />
    </Box>
  );
};

export default About;
