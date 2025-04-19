import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";

function Layout() {
  const isDesktop = useMediaQuery("(min-width: 600px)");

  return (
    <Box display={isDesktop ? "flex" : "block"} width="100%" height="100%">
      <Box flexGrow={1}>
        This is a Layout
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
