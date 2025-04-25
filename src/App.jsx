import { useMemo } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "@/theme";
import Layout from "@/layout";
import Dashboard from "@/screens/dashboard";
import Products from "@/screens/products";
import Customers from "@/screens/customers";
import Transactions from "@/screens/transactions";
import Geography from "@/screens/geography";
import Overview from "@/screens/overview";
import Daily from "@/screens/daily";
import Monthly from "@/screens/monthly";
import Breakdown from "@/screens/breakdown";
import Admin from "@/screens/admin";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/daily" element={<Daily />} />
            <Route path="/monthly" element={<Monthly />} />
            <Route path="/breakdown" element={<Breakdown />} />
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
