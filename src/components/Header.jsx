import { AppBar, Button, styled, Toolbar, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const LinkButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  textDecoration: "none",
}));

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          COIN APP
        </Typography>
        <LinkButton component={RouterLink} to="/">
          Home
        </LinkButton>
        <LinkButton component={RouterLink} to="/coins">
          Coins
        </LinkButton>
        <LinkButton component={RouterLink} to="/user">
          Users
        </LinkButton>
      </Toolbar>
    </AppBar>
  );
};
