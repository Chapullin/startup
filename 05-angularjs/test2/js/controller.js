var moviescatControllers = angular.module('moviescatControllers', []);

moviescatControllers.controller('MovieListCtrl', ['$scope', '$http',
  function ($scope, $http) { //MovieListCtrl es el controlador dentro del route
   // $http.get('js/movies.json').success(function(data) {
      $scope.movies = data;
      $scope.orderProp = 'year';
  }]);

moviescatControllers.controller('MovieDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.name = $routeParams.name;  //ex $scope.phoneId
  }]);
