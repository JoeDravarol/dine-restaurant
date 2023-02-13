import Card, { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

import Container from '@/components/Container';

type Props = CardProps & {
  title: string;
  description: string;
  img: {
    src: string;
    alt: string;
    sources: {
      srcSet: string;
      media: string;
    }[]
  }
}

const StyledCard = styled(Card)(({ theme }) => ({
  marginInline: theme.spacing(3),
  marginBottom: 101,
  overflow: 'revert', // Prevent square box shadow
  position: 'relative',

  [theme.breakpoints.up('tablet')]: {
    marginInline: 'auto',
    marginBottom: 118,
    maxWidth: 573,
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  boxShadow: '0 75px 100px -50px rgba(56, 66, 85, 0.5)',
  position: 'relative',
  zIndex: 5,
  [theme.breakpoints.up('tablet')]: {
  },
})) as typeof CardMedia;

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: 'revert',
  '&:last-child': {
    padding: 'revert',
  },

  [theme.breakpoints.up('tablet')]: {
    maxWidth: 457,
    marginInline: 'auto',
    // paddingInline: 12,
  },
}));

const InfoCard: React.FC<Props> = ({ img, title, description, ...props }) => {
  return (
    <StyledCard elevation={0} {...props}>
      <picture>
        {img.sources.map((source, i) => (
          <source key={`${img.alt}-${i}`} srcSet={source.srcSet} media={source.media} />
        ))}
        <StyledCardMedia component="img" src={img.src} alt={img.alt} />
      </picture>

      <Container
        sx={{
          marginTop: { mobile: 6.375, tablet: 7 },
          textAlign: 'center',
        }}
        disableGutters
      >
        <StyledCardContent>
          <Typography
            variant="h2"
            fontSize={{ mobile: '2rem', tablet: '3rem' }}
            lineHeight={{ mobile: '2.5rem', tablet: '3rem' }}
            letterSpacing={{ mobile: '-0.003rem', tablet: '-0.031rem' }}
            px={{ mobile: 4, tablet: 4.25 }}
            mt={{ mobile: 4.5, tablet: 4.875 }}
            mb={{ mobile: 1.625, tablet: 3.375 }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            fontSize={{ tablet: '1.25rem' }}
            lineHeight={{ mobile: '1.625rem', tablet: '1.875rem' }}
          >
            {description}
          </Typography>
        </StyledCardContent>
      </Container>
    </StyledCard>
  );
};

export default InfoCard;
