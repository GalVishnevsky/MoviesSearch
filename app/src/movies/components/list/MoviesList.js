import MoviesController from './MoviesController'

export default {
  name: 'moviesList',
  config: {
    bindings: { movies: '<' },
    templateUrl: 'src/movies/components/list/MoviesList.html',
    controller: [ '$mdDialog',  MoviesController ]
  }
};
