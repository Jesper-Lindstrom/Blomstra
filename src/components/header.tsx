import { ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Header() {
  let logo = "../../images/Logo+Background.png";

  return (
    <Box sx={{ background: "beige" }}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "8rem" }}>
        <Box
          sx={{
            marginTop: "6rem",
            backgroundImage: `url(${logo})`,
            width: "25rem",
            height: "5rem",
            backgroundPositionY: "-0.7rem",
            // border: "1px solid black",
            borderRadius: "5px",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          height: "5rem",
          gap: "2rem",
          fontSize: "25px",
          justifyContent: "flex-end",
          alignItems: "center",
          marginLeft: "auto",
          fontFamily: "merriweather",
        }}
      >
        <NavLink to="./products">Produkter</NavLink>
        <NavLink to="./careinstructions">Skötselråd</NavLink>
        <NavLink to="./checkout">Kassa</NavLink>
        <NavLink to="/contact">Kontakta oss</NavLink>
        <Box
          sx={{
            marginRight: "1rem",
          }}
        >
          <NavLink to="./checkout">
            <IconButton aria-label="cart" color="secondary">
              <ShoppingCartIcon />
            </IconButton>
          </NavLink>
        </Box>
      </Box>
    </Box>
  );
}
