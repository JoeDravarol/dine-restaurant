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

const TypographyGridContainer = styled(GridContainer)(({ theme }) => ({
  gridTemplateColumns: '413px 1fr',
  gridGap: theme.spacing(2.625),
}));

const DesignSystem: React.FC = () => {
  const alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 65)).join(' ');
  const symbols = '!@#$%^&*()';

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

      <FixedContainer sx={{ marginBottom: 13.125 }} component="section" disableGutters>
        <Typography variant="h2" mt={7.75} mb={2} color="neutral.ebonyClay">2. Typography</Typography>
        <Typography
          variant="body1"
          fontSize="0.813rem"
          lineHeight="1.438rem"
          mb={9}
        >
          * These heading leavels are for guidance purposes only. The actual heading leve used in the code may differ.
        </Typography>

        <Box component="section" mb={6}>
          <Typography
            variant="h3"
            fontSize="0.75rem"
            lineHeight="0.69rem"
            textTransform="uppercase"
            letterSpacing="0.234rem"
            color="neutral.ebonyClay"
            mb={5}
          >
            Font family
          </Typography>

          <GridContainer>
            <Typography variant="h2" component="h3" textTransform="capitalize">League spartan</Typography>
            <Box>
              <Typography lineHeight="2rem">
                <Typography component="span" fontWeight="bold" lineHeight="revert">{alphabet} </Typography>
                {alphabet} {symbols}
              </Typography>
            </Box>
          </GridContainer>
        </Box>

        <TypographyGridContainer component="section">
          <Box component="section">
            <Typography
              variant="h3"
              fontSize="0.75rem"
              lineHeight="0.69rem"
              textTransform="uppercase"
              letterSpacing="0.234rem"
              color="neutral.ebonyClay"
              mb={4.375}
            >
              Headings
            </Typography>

            <Box mb={6.25}>
              <Typography
                variant="h3"
                component="h4"
                fontSize="0.813rem"
                lineHeight="1.125rem"
                textTransform="capitalize"
                letterSpacing="revert"
                color="secondary.main"
                mb={1.75}
              >
                Heading (XL), League spartan light, 80px, 80px Line, -1 Character
              </Typography>

              <Typography variant="h1"textTransform="capitalize">
                Jived fox
              </Typography>
            </Box>

            <Box mb={8.375}>
              <Typography
                variant="h3"
                component="h4"
                fontSize="0.813rem"
                lineHeight="1.125rem"
                textTransform="capitalize"
                letterSpacing="revert"
                color="secondary.main"
                mb={2.625}
              >
                Heading (L), League spartan nold, 48px, 48px Line, -0,5 Character
              </Typography>

              <Typography variant="h2" component="p">
                Jived fox nymph grabs quick waltz
              </Typography>
            </Box>

            <Box mb={7.25}>
              <Typography
                variant="h3"
                component="h4"
                fontSize="0.813rem"
                lineHeight="1.125rem"
                textTransform="capitalize"
                letterSpacing="revert"
                color="secondary.main"
                mb={2.625}
              >
                Heading (M), League spartan nold, 20px, 24px Line -0,25 Character
              </Typography>

              <Typography variant="h3">
                Jived fox nymph grabs quick waltz
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h3"
                component="h4"
                fontSize="0.813rem"
                lineHeight="1.125rem"
                textTransform="capitalize"
                letterSpacing="revert"
                color="secondary.main"
                mb={2.125}
              >
                Heading (S), League spartan semiBold, 17px, 28px Line, +2,5 Character
              </Typography>

              <Typography variant="h4" textTransform="uppercase">
                Family Gathering
              </Typography>
            </Box>
          </Box>

          <Box component="section">
            <Typography
              variant="h3"
              fontSize="0.75rem"
              lineHeight="0.69rem"
              textTransform="uppercase"
              letterSpacing="0.234rem"
              color="neutral.ebonyClay"
              mb={4.375}
            >
              Body
            </Typography>

            <Box mb={6.25}>
              <Typography
                variant="h3"
                component="h4"
                fontSize="0.813rem"
                lineHeight="1.125rem"
                textTransform="capitalize"
                letterSpacing="revert"
                color="secondary.main"
                mb={1.75}
              >
                Body 1, League spartan regular, 20px, 30px Line,
              </Typography>

              <Typography>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
                nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
                laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.
                Ut justo. Suspendisse potenti.
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h3"
                component="h4"
                fontSize="0.813rem"
                lineHeight="1.125rem"
                textTransform="capitalize"
                letterSpacing="revert"
                color="secondary.main"
                mb={1.75}
              >
                Body 2, League spartan regular, 16px, 26px Line,
              </Typography>

              <Typography variant="body2">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh
                nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
                laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis.
                Ut justo. Suspendisse potenti.
              </Typography>
            </Box>
          </Box>
        </TypographyGridContainer>
      </FixedContainer>
    </Box>
  );
};

export default DesignSystem;
