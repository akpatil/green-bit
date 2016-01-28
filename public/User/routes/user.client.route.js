angular.module('user').config(['$routeProvider', function($routeProvider){
	$routeProvider

	.when('/user', {
		templateUrl: '/User/views/list-user.client.view.html'
	})

	.when('/user/:userId/edit', {
		templateUrl: '/User/views/update-user.client.view.html'
	});
}]);