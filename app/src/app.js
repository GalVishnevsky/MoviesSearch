// Load libraries
import angular from 'angular';

import 'angular-animate';
import 'angular-aria';
import 'angular-material';

import AppController from 'src/AppController';
import Movies from 'src/movies/movies';
import Paging from 'src/paging/paging';

export default angular.module( 'moviesSearch', [ 'ngMaterial', Movies.name ] )
    .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('grey')
        .accentPalette('blue-grey');
    })
    .controller('AppController', AppController)
    .directive('paging', Paging);
