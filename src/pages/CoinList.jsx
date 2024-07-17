import { Box, Typography } from "@mui/material";

import { useFetchCoins } from "../hooks/useFetchCoins";
import { MainLayout } from "../layouts/MainLayout";
import { CoinGrid } from "../components";

export const CoinList = () => {
  const { coins, isLoading } = useFetchCoins();

  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 4,
        }}
      >
        <Typography variant="h4" component="h1" sx={{ fontWeight: "bold" }}>
          Coins
        </Typography>
      </Box>
      {/* eslint-disable-next-line no-undef */}
      <CoinGrid coins={coins} isLoading={isLoading} />
    </MainLayout>
  );
};
