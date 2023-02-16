import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
  NegativeView,
  Navbar,
  BeersList,
  BeerDetails,
  Progress,
} from "./components";
import { useBeerStore } from "./stores/store";

/**
 * Main app component, fetches data and handles route definitions
 */

const App = () => {
  const {
    filteredBeers,
    setBeers,
    isLoading,
    setIsLoading,
    toggleFavorite,
    setFilter,
  } = useBeerStore((state) => ({
    filteredBeers: state.filteredBeers(),
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
                  negativeView={
                    <NegativeView
                      headerText="No Favourites"
                      actionButtonText="Show All"
                      actionButtonClick={() => {
                        setFilter(false);
                      }}
                    />
                  }
                  onToggleFavoriteClicked={(id)=>toggleFavorite(id)}
                />
              )
            }
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
