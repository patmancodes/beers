import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Button } from "@mui/material";
import {
  NegativeView,
  Navbar,
  BeersList,
  BeerDetails,
  Progress,
} from "./components";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useBeerStore } from "./stores/store";

/**
 * Main app component, fetches data and handles route definitions
 */

const App = () => {
  const {
    filteredBeers,
    filteredToFavorites,
    setBeers,
    isLoading,
    setIsLoading,
    toggleFavorite,
    setFilter,
  } = useBeerStore((state) => ({
    filteredBeers: state.filteredBeers(),
    filteredToFavorites: state.filter,
    setBeers: state.setBeers,
    isLoading: state.isLoading,
    setIsLoading: state.setIsLoading,
    toggleFavorite: state.toggleFavorite,
    setFilter: state.setFilter,
  }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const resp = await fetch("https://api.punkapi.com/v2/beers");
        const data = await resp.json();
        setBeers(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Box sx={{ background: "white" }}>
        <Navbar />
        <Routes>
          <Route path="/beer/:id" element={<BeerDetails />} />
          <Route
            path="/"
            element={
              isLoading ? (
                <Progress />
              ) : (
                <BeersList
                  beers={filteredBeers}
                  onToggleFavoriteClicked={(id) => toggleFavorite(id)}
                >
                  <NegativeView
                    headerText="No Favourites"
                    actionButtonText="Show All"
                    actionButtonClick={() => {
                      
                    }}
                  >
                    {filteredToFavorites && (
                      <Button
                        sx={{ mt: "50px" }}
                        variant="outlined"
                        startIcon={<ChevronLeftIcon />}
                        onClick={()=>setFilter(false)}
                      >
                        Show All
                      </Button>
                    )}
                  </NegativeView>
                </BeersList>
              )
            }
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
