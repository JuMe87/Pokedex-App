# Achievement 1 Project:  JavaScript App - Pokédex-app  

## Table of Contents

- [Objective](#Objective)
- [Features and Requirements](#Features-and-Requirements)
- [Technical Requirements](#Technical-Requirements)
- [Setup](#setup)
- [Useful commands](#useful-commands)
- [Screenshots](#screenshots)

## Objective

To build a small web application with HTML, CSS, and JavaScript that loads  data from an external API and enables the viewing of data points in detail.

The app uses the following API to load information on pokemon: https://pokeapi.co/api/v2/pokemon/?limit=150

## Features and Requirements

### User Goals

Your users should be able to view a list of data and see more details for a given data item on demand. It’s up to you to come up with a type of data you want to display (see this list of public APIs for an example); however, if you don’t have any special preferences, you can write a small Pokédex app to display a list of Pokémon.

### Key Features

- Load data from an external source (API)
- View a list of items
- On user action (e.g., by clicking on a list item), view details for that item

## Technical Requirements

- The app must load data from an external API; for instance, the Pokémon API
- The app must display a list of items loaded from that API after the page is loaded.
- The app must enable the viewing of more details for a given list item (like a Pokémon) on  demand, such as when clicking on a list item.
  - The app must have CSS styling.
  - The JavaScript code must be formatted according to ESLint rules.
- The JavaScript code may be formatted via Prettier.
- The JavaScript code may be manually formatted.
- The app must use at least one additional complex UI pattern, such as a modal, for details or  touch interactions.  ○ The app may allow searching for items (e.g., searching for Pokémon).
- The app must not throw any errors when being used.
- The app should be deployed to a publicly accessible platform like GitHub Pages (you can  review how to do this in Intro to Frontend Development's Exercise 10: Code Quality, Testing, &  Web Hosting ).
- The app must work in Chrome, Firefox, Safari, Edge, and Internet Explorer 11.

## setup

### Publishing on gh-pages using GitHub Desktop

1. Make sure all your changes are committed and pushed to the main branch.
2. Create a new branch named “gh-pages”. To do so, use the button “Current Branch” from the navigation bar located below the menu bar.
3. Click on “New branch” from the dropdown menu. This will bring up the “Create a branch” form.
4. Type “gh-pages” into the “Name” field. It needs to be this name exactly; otherwise, it won’t work. This is because gh-pages is a special branch reserved for publishing your website on GitHub. Finally, click the Create branch button.
5. Your second branch should start exactly where the main branch was. You can now publish this branch to GitHub by clicking “Publish branch”.
6. That’s it! You can now access the website under “https://jume87.github.io/Pokedex-App/”
7. Whenever you push new changes to the gh-pages branch, your website will be automatically updated, too. The website may take a few minutes before it goes live, so give it a moment or two if you’re still getting an error message when trying to visit the published website.

## Screenshots

![Screenshot of List of Pokémon](./assets/Screenshot_Overview%20Pokemon.png?raw=true "Overview")
![Screenshot of individual Pokémon](./assets/Screenshot_individual%20pokemon.png?raw=true "Single View")
