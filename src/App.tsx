import { Box } from "@mui/material";
import Header from "./components/header";
import Products from "./pages/Products";

export default function App() {
  return (
    <Box sx={{ background: "#5BAEb7", display: "flex", flexDirection: "column", height: "100%" }}>
      <Header />
      <Products />
    </Box>
  );
}
