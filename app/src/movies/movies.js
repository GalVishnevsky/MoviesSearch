// Load the custom app ES6 modules

import MoviesDataService from 'src/movies/services/MoviesDataService';

import MoviesList from 'src/movies/components/list/MoviesList';

// Define the Angular 'users' module

export default angular
  .module("movies", ['ngMaterial'])

  .component(MoviesList.name, MoviesList.config)
  .service("MoviesDataService", MoviesDataService);
