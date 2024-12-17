import { Box, Grid2, Typography } from "@mui/material";
import React from "react";
import logo1 from "../Assets/Images/about-2.jpeg";
export default function AboutContent() {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Grid2
        container
        // spacing={2}
        sx={{ backgroundColor: "#acab753b", borderRadius: "20px" }}
      >
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <img
            src={logo1}
            alt="picture"
            style={{ width: "100%", borderRadius: "20px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              p: 3,
              textAlign: "justify",
            }}
          >
            <Typography
              gutterBottom
              sx={{ fontWeight: "900", fontSize: "40px" }}
            >
              About <span style={{ color: "#5a0c4a" }}>Us</span>
            </Typography>
            <Typography
              variant="subtitle2"
              gutterBottom
              sx={{ fontWeight: "900" }}
            >
              
            </Typography>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >At DigiBazaar, we believe in the joy of discovery. Our platform is designed to provide you with an effortless browsing experience, showcasing a wide range of products for your curiosity and inspiration.
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ textAlign: "justify" }}
            >
             We collaborate with DummyJSON to bring a diverse collection of items to your fingertips. From everyday essentials to unique finds, DigiBazaar is your go-to destination for exploring products across various categories.
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
