function MovieController($scope, $mdDialog, imdbId, MoviesDataService) {
    $scope.info = {}
    MoviesDataService.movieDetails(imdbId).then((res) => {
        $scope.info = res.data;
    })
}

export default MovieController