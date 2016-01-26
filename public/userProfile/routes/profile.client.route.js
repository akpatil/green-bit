angular.module('moduleProfile').config(['$routeProvider', function($routeProvider){
	$routeProvider

	.when('/profile/create', {
		templateUrl: 'userProfile/views/profile-create.client.view.html'
	});
}]);