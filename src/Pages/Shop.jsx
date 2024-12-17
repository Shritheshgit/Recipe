import {
  Box,
  Chip,
  Grid,
  Paper,
  TextField,
  Typography,
  Modal,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Modal state
  const [openModal, setOpenModal] = useState(false);

  // Fetch recipes
  useEffect(() => {
    axios
      .get("https://dummyjson.com/recipes")
      .then((result) => {
        setRecipes(result.data.recipes);
        setFilteredRecipes(result.data.recipes);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Filter recipes by search term and category
  useEffect(() => {
    let filtered = [...recipes];

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (recipe) => recipe.tags.includes(selectedCategory)
      );
    }

    if (searchTerm) {
      filtered = filtered.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredRecipes(filtered);
  }, [selectedCategory, searchTerm, recipes]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleCardClick = (recipe) => {
    setSelectedRecipe(recipe);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedRecipe(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* Filter Section */}
        <Grid item xs={12} sm={3} sx={{ p: 2 }}>
          <Box>
            <Typography variant="body2" color="text.secondary">
              Filter By Category
            </Typography>
            <Box
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "flex-start",
                gap: 1,
                width: "100%",
                flexWrap: "wrap",
              }}
            >
              {[
                "All",
                ...Array.from(new Set(recipes.flatMap((recipe) => recipe.tags))),
              ].map((category) => (
                <Chip
                  key={category}
                  color={selectedCategory === category ? "success" : "default"}
                  label={category}
                  component={Paper}
                  onClick={() => handleCategoryChange(category)}
                />
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Recipe List Section */}
        <Grid item xs={12} sm={9} sx={{ p: 2 }}>
          <Box>
            <TextField
              fullWidth
              type="search"
              label="Search recipes here"
              placeholder="Search recipes by name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <Box sx={{ flexGrow: 1, p: 3 }}>
              <Grid container spacing={2}>
                {filteredRecipes.length > 0 ? (
                  filteredRecipes.map((recipe) => (
                    <Grid item xs={12} sm={4} key={recipe.id}>
                      <Paper
                        sx={{
                          p: 2,
                          cursor: "pointer",
                          textAlign: "center",
                        }}
                        onClick={() => handleCardClick(recipe)}
                      >
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          style={{ width: "100%", borderRadius: "8px" }}
                        />
                        <Typography
                          variant="h6"
                          sx={{ mt: 2, fontWeight: "bold" }}
                        >
                          {recipe.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {recipe.cuisine}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))
                ) : (
                  <Typography variant="h6" color="text.secondary">
                    No recipes found.
                  </Typography>
                )}
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Modal for Recipe Details */}
      {selectedRecipe && (
        <Modal open={openModal} onClose={handleCloseModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              borderRadius: "8px",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
              {selectedRecipe.name}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>Ingredients:</strong>
              <ul>
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              <strong>Instructions:</strong>
              <ol>
                {selectedRecipe.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCloseModal}
              fullWidth
            >
              Close
            </Button>
          </Box>
        </Modal>
      )}
    </Box>
  );
}
