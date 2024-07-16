import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: "center",
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="body2" color="inherit">
        &copy; 2024 Coin App
      </Typography>
    </Box>
  );
};
