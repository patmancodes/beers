import { create } from "zustand";

const useBeerStore = create((set, get) => ({
  beers: [],
  filter: false, // false =>'show all' ;  true  => 'show only favorites..'
  isLoading: false,
  setBeers: (beers) => set({ beers }),
  setIsLoading: (isLoading) => set({ isLoading }),
  setFilter: (filter) => set({ filter }),
  toggleFavorite: (id) =>
    set((state) => {
      const newBeers = state.beers.map((beer) => {
        if (beer.id === id) {
          return { ...beer, isFavorite: !beer.isFavorite };
        }
        return beer;
      });
      return { beers: newBeers };
    }),
  filteredBeers: () => {
    let state = get();
    return state.filter
      ? state.beers.filter((beer) => beer.isFavorite)
      : state.beers;
  },
  filteredBeerCount: () => {
    let state = get();
    return state.beers?.filter((beer) => beer.isFavorite).length;
  },
}));

export { useBeerStore };
