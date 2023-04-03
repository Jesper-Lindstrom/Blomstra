import { Box } from "@mui/material";

export default function Header() {
  return (
    <Box sx={{ background: "#026C80" }}>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10rem" }}
      >
        {/* <Logo /> */}
        <h1>Blomstra</h1>
      </Box>
    </Box>
  );
}
