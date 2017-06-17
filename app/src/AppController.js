function AppController(MoviesDataService, $mdSidenav) {
  var self = this;

  self.movies = [];
  self.totalMovies = [];
  self.searchTerm = '';
  self.paging = { total: 0, page: 1, limit: 10 }
  self.searching = false;

  self.searchMovie = function () {

    if (!self.searchTerm) {
      self.movies = [];
      return
    };
    self.searching = true;

    MoviesDataService
      .searchMovies(self.searchTerm, self.paging.page)
      .then(function (movies) {
        if (movies.data.Response === "True") {
          self.paging.total = movies.data.totalResults / self.paging.limit;

          self.movies = [].concat(movies.data.Search);
        }
        else {
          self.movies = []
        }
        self.searching = false;
      });
  }

}

export default ['MoviesDataService', AppController];
