import { Box, Button } from "@mui/material";

import { products } from "../../data/index";

export default function Products() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {products.map((product) => (
        <Box
          sx={{
            display: "flex",
            background: "beige",
            flexDirection: "column",
            border: "1px solid white",
            height: "40rem",
            width: "22rem",
            margin: "2rem",
            padding: "0.5rem",
            borderRadius: "25px",
          }}
        >
          <Box sx={{ borderRadius: "5%" }}>
            <img
              src={product.image}
              alt="produktbild"
              width="100%"
              height="100%"
              style={{ borderRadius: "5%" }}
            />
          </Box>

          <Box
            sx={{
              // border: "1px solid black",
              margin: "1rem",
              padding: "0.2rem",
              height: "100%",
              fontFamily: "Merriweather, serif;",
              fontSize: "18px",
            }}
          >
            <Box sx={{ textAlign: "center", fontSize: "25px", padding: "0.5rem" }}>
              {product.title}
            </Box>
            {product.description}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "auto",
              padding: "0.5rem",
            }}
          >
            <Box sx={{ fontSize: "25px" }}>{product.price}kr</Box>
            <Button
              variant="contained"
              color="primary"
              aria-label="add to shopping cart"
              sx={{ width: "2rem" }}
            >
              KÖP
            </Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
