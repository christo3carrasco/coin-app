import { Box } from "@mui/material";

import { Footer, Header } from "../components";

// eslint-disable-next-line react/prop-types
export const MainLayout = ({ children }) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
