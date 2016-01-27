angular.module('moduleProfile').controller('ProfileController', ['$scope', '$routeParams', '$location', 'serviceProfile', function($scope, $routeParams, $location, serviceProfile){

	$scope.find = function(){
		$scope.users = serviceProfile.query();
	};

	$scope.findOne = function(){
		$scope.user = serviceProfile.get({
			userId: $routeParams.userId
		});
	};

	$scope.update = function(){
		$scope.user.$update(function(){
			$location.path('profile/' + $scope.user._id);
		}, function(errorResponse){
			$scope.error = errorResponse.data.message;
		});
	};

}]);