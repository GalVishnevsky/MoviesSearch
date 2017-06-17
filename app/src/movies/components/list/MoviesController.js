import MovieController from '../movie-dialog/MovieController'


class MoviesController {

    constructor($mdDialog) {
        this.$mdDialog = $mdDialog;
    }


    openDialog(imdbId) {
        this.$mdDialog.show({
            controller: ['$scope', '$mdDialog', 'imdbId', 'MoviesDataService', MovieController],
            templateUrl: '/src/movies/components/movie-dialog/movie.html',
            parent: angular.element(document.body),
            clickOutsideToClose: true,
            locals: { imdbId }
        })
    };

}
export default MoviesController;
