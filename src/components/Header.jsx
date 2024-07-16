import { AppBar, Button, styled, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
        <LinkButton component={Link} to="/">
          Home
        </LinkButton>
        <LinkButton component={Link} to="/coins">
          Coins
        </LinkButton>
        <LinkButton component={Link} to="/user">
          Users
        </LinkButton>
      </Toolbar>
    </AppBar>
  );
};
