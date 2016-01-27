angular.module('moduleProfile').config(['$routeProvider', function($routeProvider){
	$routeProvider

	.when('/profile', {
		templateUrl: 'userProfile/views/profile-view.client.view.html'
	})

	.when('/profile/update', {
		templateUrl: 'userProfile/views/profile-update.client.view.html'
	});
}]);