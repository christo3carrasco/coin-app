import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";
import welcomeImage from "../assets/cryptocurrency.jpg";

export const Home = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 4,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{ mb: 4, fontWeight: "bold" }}
        >
          Welcome to Coin App
        </Typography>
        <Box
          component="img"
          src={welcomeImage}
          alt="Welcome"
          sx={{ width: "100%", maxWidth: 500, mb: 4, borderRadius: 2 }}
        />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained" component={RouterLink} to="/coins">
            View Coins
          </Button>
          <Button variant="outlined" component={RouterLink} to="/user">
            Users
          </Button>
        </Box>
      </Box>
    </MainLayout>
  );
};
