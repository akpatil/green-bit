angular.module('moduleProfile').config(['$routeProvider', function($routeProvider){
	$routeProvider

	.when('/profile', {
		templateUrl: 'userProfile/views/profile-view.client.view.html'
	})

	.when('/profile/create', {
		templateUrl: 'userProfile/views/profile-create.client.view.html'
	});
}]);