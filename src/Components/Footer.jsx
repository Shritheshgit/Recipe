import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import logo2 from "../Assets/Images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Paper
      elevation={10}
      sx={{
        color: "#353543",
        py: 4,
        px: 2,
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* Website Title and Tagline */}
        <Grid item xs={12} md={6}>
          <img style={{ width: "200px", color: "black" }} src={logo2} alt="logo" />
          <Typography variant="body1" sx={{ mt: 1 }}>
          Your One-Stop Shop for Digital Needs
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: { xs: "center", md: "right" } }}
        >
          <Typography variant="h6" fontWeight="bold">
            Quick Links
          </Typography>
          <Box sx={{ mt: 1, display: "flex", flexDirection: "column" }}>
            <Link
              to="/"
              style={{
                display: "block",
                mb: 1,
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Home
            </Link>
            <Link
              to="/about"
              style={{
                display: "block",
                mb: 1,
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              About
            </Link>
            <Link
              to="/shop"
              style={{
                display: "block",
                mb: 1,
                textDecoration: "none",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              Recipes
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Typography
        variant="body2"
        sx={{ mt: 4, textAlign: "center", color: "#aaa" }}
      >
        &copy; {new Date().getFullYear()} title. All Rights Reserved.
      </Typography>
    </Paper>
  );
};

export default Footer;
