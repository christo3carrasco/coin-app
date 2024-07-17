import { Box, CircularProgress, Grid } from "@mui/material";
import { useTheme } from "@emotion/react";

import { CoinItem } from "./CoinItem";

// eslint-disable-next-line react/prop-types
export const CoinGrid = ({ coins, isLoading }) => {
  const theme = useTheme();

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="80vh"
      >
        <CircularProgress style={{ color: theme.palette.primary.main }} />
      </Box>
    );
  }

  return (
    <Grid container>
      {
        // eslint-disable-next-line react/prop-types
        coins.map((coin) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={coin.id}>
            <CoinItem coin={coin} />
          </Grid>
        ))
      }
    </Grid>
  );
};
