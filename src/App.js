import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { Navbar, BeersList, BeerDetails, Progress } from "./components";
import { useBeerStore } from "./stores/store";

const App = () => {
  const { setBeers, isLoading, setIsLoading } = useBeerStore((state) => ({    
    setBeers: state.setBeers,
    isLoading: state.isLoading,
    setIsLoading: state.setIsLoading,
  }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const resp = await fetch("https://api.punkapi.com/v2/beers");
        const data = await resp.json();
        setBeers(data);
      } catch (err) {
        console.log(err);
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
          <Route path="/beer/:id" element={<BeerDetails  />} />
          <Route path="/" element={isLoading ? <Progress /> : <BeersList />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
