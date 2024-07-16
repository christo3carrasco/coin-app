import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";
import notFoundImage from "../assets/transaction.jpg";

export const NotFound = () => {
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
          Page Not Found
        </Typography>
        <Box
          component="img"
          src={notFoundImage}
          alt="Not Found"
          sx={{ width: "100%", maxWidth: 500, mb: 4, borderRadius: 2 }}
        />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button variant="contained" component={RouterLink} to="/">
            Go to Home
          </Button>
          <Button variant="outlined" component={RouterLink} to="/coins">
            View Coins
          </Button>
        </Box>
      </Box>
    </MainLayout>
  );
};
