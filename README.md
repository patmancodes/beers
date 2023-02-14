
# Punk Api React App

A React App using Brewdog's Punk API to fetch a list of beers. 

- [Zustand](https://github.com/pmndrs/zustand)  has been used to manage state. 
- Data served from brewdog's [punk Api](https://punkapi.com/documentation/v2)
- [Mui](https://mui.com/material-ui/getting-started/overview/) component library used across all components.


## Demo

Click  a list item's "heart" icon :heart: or the same icon on a beer's details page to add it to your favorites.
Clicking the heart :heart: in the top right header will filter the list down to beers you have saved. 

![punk](https://user-images.githubusercontent.com/124147905/218825775-ba363782-27d5-4f99-b445-58cf2e6e1870.PNG)



## Requirements

- Display a list of all the beers.
- If a user selects a beer, present them a detail page.
- Add functionality that allows a user to “favourite” a beer. This should only be done in memory and should reset if the browser is refreshed.
- If a user “favourites” a beer, add it to another list that keeps track of his/her favourites.
- The favourites list should include functionality to remove a beer from the list.
- React is preferred.
- The app doesn’t need to look super refined, as long as it is user friendly.
- We are looking for good principles of accessibility, performance, architecture, etc.


## Run Locally

Ensure node is installed (version v18.13.0) 

Clone the project

```bash
  git clone https://github.com/patmancodes/beers.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```



## TODO's

### Tests
- Add them!!

### Component Design
- Revise some components dependancy on the zustand store. Use props where possible to promote component re-usability .

### Dependancies
- npm install has detected 6 high severity vulnerabilities and some deprecated plugins. These should be reviewed before releasing to production

### Accessibility
- The contrast of the BeerCard component background color and tagline text should be improved.
- aria , title and alt attributes to be revised across all markup

### Localisation
- Not in the the requirments, but should be discussed.  

### CSS
- Review the inlined css *sx=* on a number of mui components. Debate whether to refactor into own sass file. (Folder per component with accompanying sass file)

### Performance
- Clicking the favorite button on the beer card causes a re-render of the entire page. investigate possible solutions to mitigate this. 
- investigate delayed loading of images below the fold.  













