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
    sources: [{
      srcSet: string;
      media: string;
    }]
  }
}

const StyledCard = styled(Card)(({ theme }) => ({
  marginInline: theme.spacing(3),
  marginBottom: 101,
  overflow: 'revert', // Prevent square box shadow
  position: 'relative',
  zIndex: 5,
}));

const StyledCardMedia = styled(CardMedia)(() => ({
  boxShadow: '0 75px 100px -50px rgba(56, 66, 85, 0.5)',
})) as typeof CardMedia;

const StyledCardContent = styled(CardContent)(() => ({
  padding: 'revert',
  '&:last-child': {
    padding: 'revert',
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

      <Container sx={{ marginTop: 6.375, textAlign: 'center' }} disableGutters>
        <StyledCardContent>
          <Typography
            variant="h2"
            fontSize={{ mobile: '2rem' }}
            lineHeight={{ mobile: '2.5rem' }}
            letterSpacing={{ mobile: '-0.003rem' }}
            px={{ mobile: 4 }}
            mt={{ mobile: 4.5 }}
            mb={{ mobile: 1.625 }}
          >
            {title}
          </Typography>

          <Typography
            variant="body2"
            lineHeight={{ mobile: '1.625rem' }}
          >
            {description}
          </Typography>
        </StyledCardContent>
      </Container>
    </StyledCard>
  );
};

export default InfoCard;
