import { Box, Grid, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import Logo from '@/assets/icons/logo.svg';
import PatternCurveTopRight from '@/assets/patterns/pattern-curve-top-left.svg';
import PatternLines from '@/assets/patterns/pattern-lines.svg';
import Container from '@/components/Container';

const HeaderContainer = styled(Box)(({ theme }) => ({
  width: 826,
  height: 200,
  marginInline: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const FixedContainer = styled(Container)(({ theme }) => ({
  width: 824,
  color: theme.palette.neutral.mirage,
}));

const ColorCircle = styled(Box)(({ theme }) => ({
  height: 64,
  width: 64,
  borderRadius: '50%',
}));

const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: theme.spacing(5.5),
}));

const DesignSystem: React.FC = () => {
  return (
    <Box sx={{ marginInline: 'auto'}} maxWidth={1024} position="relative">
      <HeaderContainer component="header">
        <Logo style={{ width: '82.4px', height: 32 }} viewBox="0 0 103 40" />
        <Typography variant="h4" component="h1" textTransform="uppercase">web design system</Typography>

        <Box position="absolute" top={0} right={0}>
          <PatternCurveTopRight style={{ width: 490, height: 200 }} />
        </Box>
        <Box position="absolute" top={0} right={0} mt="162px">
          <PatternLines />
        </Box>
      </HeaderContainer>

      <FixedContainer sx={{ marginBottom: 9.75 }} component="section" disableGutters>
        <Typography variant="h2" mt={7.75} mb={8} color="neutral.ebonyClay">1. Colors</Typography>

        <GridContainer>
          <Box>
            <Typography
              variant="h3"
              fontSize="0.75rem"
              lineHeight="0.69rem"
              color="neutral.ebonyClay"
              textTransform="uppercase"
              letterSpacing="0.234rem"
              mb={4.375}
            >
              Primary
            </Typography>

            <Box mb={3}>
              <Stack direction="row" spacing={3.625} alignItems="center">
                <ColorCircle bgcolor="secondary.main" />

                <Stack>
                  <Typography
                    variant="h3"
                    component="h4"
                    fontSize="0.813rem"
                    lineHeight="1.125rem" mb={0.5}
                    letterSpacing="revert"
                  >
                    Beaver
                  </Typography>

                  <Typography
                    variant="h4"
                    component="span"
                    fontSize="0.813rem"
                    lineHeight="1.125rem"
                    letterSpacing="revert"
                    fontWeight="500"
                  >
                    HEX : #9E7F66
                    <Box component="span" display="block">
                      RGB : rgb(158, 127, 102)
                    </Box>
                    <Box component="span" display="block">
                      HSL : hsl(27°, 22%, 51%)
                    </Box>
                  </Typography>
                </Stack>
              </Stack>
            </Box>

            <Box mb={3}>
              <Stack direction="row" spacing={3.625} alignItems="center">
                <ColorCircle bgcolor="primary.main" />

                <Stack>
                  <Typography
                    variant="h3"
                    component="h4"
                    fontSize="0.813rem"
                    lineHeight="1.125rem" mb={0.5}
                    textTransform="capitalize"
                    letterSpacing="revert"
                  >
                    Cod gray
                  </Typography>

                  <Typography
                    variant="h4"
                    component="span"
                    fontSize="0.813rem"
                    lineHeight="1.125rem"
                    letterSpacing="revert"
                    fontWeight="500"
                  >
                    HEX : #111111
                    <Box component="span" display="block">
                      RGB : rgb(17, 17, 17)
                    </Box>
                    <Box component="span" display="block">
                      HSL : hsl(0°, 0%, 7%)
                    </Box>
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>

          <Box>
            <Typography
              variant="h3"
              fontSize="0.75rem"
              lineHeight="0.69rem"
              color="neutral.ebonyClay"
              textTransform="uppercase"
              letterSpacing="0.234rem"
              mb={4.375}
            >
              Secondary
            </Typography>

            <Box mb={3}>
              <Stack direction="row" spacing={3.625} alignItems="center">
                <ColorCircle bgcolor="neutral.mirage" />

                <Stack>
                  <Typography
                    variant="h3"
                    component="h4"
                    fontSize="0.813rem"
                    lineHeight="1.125rem"
                    textTransform="capitalize"
                    letterSpacing="revert"
                    mb={0.5}
                  >
                    Mirage
                  </Typography>

                  <Typography
                    variant="h4"
                    component="span"
                    fontSize="0.813rem"
                    lineHeight="1.125rem"
                    letterSpacing="revert"
                    fontWeight="500"
                  >
                    HEX : #17192b
                    <Box component="span" display="block">
                      RGB : rgb(23, 25, 43)
                    </Box>
                    <Box component="span" display="block">
                      HSL : hsl(234°, 30%, 13%)
                    </Box>
                  </Typography>
                </Stack>
              </Stack>
            </Box>

            <Box mb={3}>
              <Stack direction="row" spacing={3.625} alignItems="center">
                <ColorCircle bgcolor="neutral.ebonyClay" />

                <Stack>
                  <Typography
                    variant="h3"
                    component="h4"
                    fontSize="0.813rem"
                    lineHeight="1.125rem"
                    textTransform="capitalize"
                    letterSpacing="revert"
                    mb={0.5}
                  >
                    Ebody clay
                  </Typography>

                  <Typography
                    variant="h4"
                    component="span"
                    fontSize="0.813rem"
                    lineHeight="1.125rem"
                    letterSpacing="revert"
                    fontWeight="500"
                  >
                    HEX : #242b37
                    <Box component="span" display="block">
                      RGB : rgb(36, 43, 55)
                    </Box>
                    <Box component="span" display="block">
                      HSL : hsl(218°, 21%, 18%)
                    </Box>
                  </Typography>
                </Stack>
              </Stack>
            </Box>

            <Box>
              <Stack direction="row" spacing={3.625} alignItems="center">
                <ColorCircle bgcolor="neutral.shuttleGray" />

                <Stack>
                  <Typography
                    variant="h3"
                    component="h4"
                    fontSize="0.813rem"
                    lineHeight="1.125rem"
                    textTransform="capitalize"
                    letterSpacing="revert"
                    mb={0.5}
                  >
                    Shuttle gray
                  </Typography>

                  <Typography
                    variant="h4"
                    component="span"
                    fontSize="0.813rem"
                    lineHeight="1.125rem"
                    letterSpacing="revert"
                    fontWeight="500"
                  >
                    HEX : #5c6779
                    <Box component="span" display="block">
                      RGB : rgb(92, 103, 121)
                    </Box>
                    <Box component="span" display="block">
                      HSL : hsl(217°, 14%, 42%)
                    </Box>
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </GridContainer>
      </FixedContainer>
    </Box>
  );
};

export default DesignSystem;
