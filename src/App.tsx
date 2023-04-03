import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./components/header";

export default function App() {
  return (
    <Box sx={{ background: "#5BAEb7", display: "flex", flexDirection: "column", height: "100%" }}>
      <Header />
      <Outlet />
      {/* <Products /> */}
    </Box>
  );
}
