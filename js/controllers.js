angular.module('portfolio.controllers', [])

.filter('joinArray', function() {
  return function(array) {
    array = array || [];
    return "" + array.join(', ');
  };
})

.controller('CurrentProjectsCtrl', function($scope, $window) {
  console.log("window.current: ", $window.current);
  $scope.$window = $window;
  $scope.projects = $window.current;
})

.controller('PortfolioProjectsCtrl', function($scope, $window) {
  console.log("window.portfolio: ", $window.portfolio);
  $scope.projects = $window.portfolio;
});
