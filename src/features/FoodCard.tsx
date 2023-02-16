import { Typography } from '@mui/material';
import Card, { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import React from 'react';

type Props = CardProps & {
  title: string;
  description: React.ReactNode;
  img: {
    src: string;
    sources: {
      srcSet: string;
      media: string;
    }[]
  }
}

const StyledCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  paddingBottom: 54,
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  textAlign: 'center',
  borderRadius: 'revert',
  position: 'relative',
  '&::after': {
    content: '""',
    height: 1,
    background: '#979797',
    opacity: 0.15,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  '&:last-of-type': {
    marginBottom: 'revert',
    paddingBottom: 'revert',
    '&::after': {
      content: 'initial',
    },
  },
  [theme.breakpoints.up('tablet')]: {
    textAlign: 'left',
    paddingBottom: 24,

    display: 'grid',
    gridTemplateColumns: '128px 383px',
    gridGap: 62,

    '&::before': {
      content: '""',
      width: 32,
      height: 1,
      backgroundColor: theme.palette.secondary.main,
      position: 'absolute',
      top: 18,
      left: 128,
    },
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: 'revert',
  '&:last-of-type': {
    paddingBottom: 'revert',
  },

  [theme.breakpoints.up('tablet')]: {
    paddingTop: theme.spacing(1),
    paddingRight: theme.spacing(3.5),
  },
}));

const FoodCard: React.FC<Props> = ({ img, title, description, ...props }) => {
  return (
    <StyledCard elevation={0} {...props}>
      <picture>
        {img.sources.map((source, i) => (
          <source key={`${title}-${i}`} srcSet={source.srcSet} media={source.media} />
        ))}
        <CardMedia component="img" src={img.src} alt={title} />
      </picture>

      <StyledCardContent>
        <Typography
          variant="h3"
          mt={{ mobile: 4.5, tablet: 0 }}
          mb={{ mobile: 0.75 }}
          textTransform="capitalize"
        >
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </StyledCardContent>
    </StyledCard>
  );
};

export default FoodCard;
