angular.module('moduleProfile').controller('ProfileController', ['$scope', '$routeParams', '$location', 'serviceProfile', function($scope, $routeParams, $location, serviceProfile){

	$scope.create = function(){
		var profile = new serviceProfile({
			age: this.age,
			gender: this.gender,
			bio: this.bio
		});
		profile.$save(function(response){
			$location.path('profile/' + response._id);
		}, function(errorResponse){
			$scope.error = errorResponse.data.message;
		});
	};

	$scope.findOne = function(){
		$scope.profile = serviceProfile.get({
			profileId: $routeParams.profileId
		});
	};

	$scope.update = function(){
		$scope.profile.$update(function(){
			$location.path('profile/' + $scope.article._id);
		}, function(errorResponse){
			$scope.error = errorResponse.data;
		});
	};

}]);