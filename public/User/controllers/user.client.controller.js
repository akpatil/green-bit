angular.module('user').controller('UserController', ['$scope', '$location', '$routeParams', 'Authentication', 'Users', function($scope, $location, $routeParams, Authentication, Users){

	$scope.authentication = Authentication;

	$scope.find = function(){
		$scope.users = Users.query();
	};

	$scope.findOne = function(){
		$scope.user = Users.get({
			userId: $routeParams.userId
		});
	};

	$scope.update = function(){
		$scope.user.$update(function(response){
			$location.path('user/'+$scope.user._id);
		}, function(errorResponse){
			$scope.error = errorResponse.data.message;
		});
	};

}]);