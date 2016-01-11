angular.module('portfolio.directives', [])

.directive('portfolioProject', [function() {
  return {
    templateUrl: 'templates/portfolio-project.html',
    restrict: 'AE',
    scope: {
      project: '='
    },
    link: function($scope, $element, $attrs) {
      $scope.state = {
      };
    }
  };
}]);
