import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, useMediaQuery } from "@mui/material";
import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import { useGetUserQuery } from "@/store/api";

// const userData = {
//   _id: "1",
//   name: "Konstantine",
//   email: "kranstead0@narod.ru",
//   password: "omMDCh",
//   city: "Nurabelen",
//   state: null,
//   country: "ID",
//   occupation: "Computer Systems Analyst I",
//   phoneNumber: "8346315874",
//   transactions: [
//     "63701d74f0323986f3000158",
//     "63701d74f03239d40b00007e",
//     "63701d74f03239867500014b",
//     "63701d74f032398675000152",
//   ],
//   role: "superadmin",
// };

function Layout() {
  const isDesktop = useMediaQuery("(min-width: 600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);
  const { data } = useGetUserQuery(userId);

  return (
    <Box display={isDesktop ? "flex" : "block"} width="100%" height="100%">
      <Sidebar
        user={data ?? {}}
        isDesktop={isDesktop}
        drawerWidth="250px"
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          user={data ?? {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
