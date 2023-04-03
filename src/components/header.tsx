import { Box } from "@mui/material";

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
          width: "100%",
          gap: "2rem",
          fontSize: "25px",
          justifyContent: "flex-end",
          marginLeft: "auto",
          fontFamily: "merriweather",
        }}
      >
        <h6>Produkter</h6>
        <h6>Skötselråd</h6>
        <h6>Kassa</h6>
        <h6>Kontakta oss</h6>
        <Box sx={{ marginRight: "1rem" }}>
          <h5>K</h5>
        </Box>
      </Box>
    </Box>
  );
}
