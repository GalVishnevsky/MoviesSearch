
function MoviesDataService($http, $q) {
  let apikey = '289ba303';
  let baseUrl = 'https://www.omdbapi.com';
  let canceler = $q.defer();
  let resolved = false;

  const cancel = function () {
    canceler.resolve("http call aborted");
  };

  return {
    searchMovies: function (term, page) {
      if (resolved) {
        cancel();
      }

      canceler = $q.defer();
      resolved = true;

      // Simulate async nature of real remote calls
      return $http.get(baseUrl, { params: { apikey: apikey, s: term, page: page }, timeout: canceler.promise })
        .then((res) => {
          resolved = false;
          return res;
        })
    },
    movieDetails: function (imdbId) {
      return $http.get(baseUrl, { params: { apikey: apikey, i: imdbId, plot: 'full' } })
    }
  };
}

export default ['$http', '$q', MoviesDataService];

